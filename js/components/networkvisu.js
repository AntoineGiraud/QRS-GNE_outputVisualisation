app.directive('networkvisu', function($rootScope) {
    return {
        restrict: 'EA',
        scope: {
          nodes: "=",
          links: "=",
          zones: "=",
          spatialextent: "=",
          loadvisu: "=",
          onClick: "&"
        },
        link: function(scope, iElement, iAttrs) {
            var margin = {top: 20, right: 20, bottom: 20, left: 20},
            width = 800 - margin.left - margin.right,
            height = 800 - margin.top - margin.bottom;
            loadsExtent = []

            var x = d3.scale.linear().range([0, width], .2).domain(scope.spatialextent[0]);
            var y = d3.scale.linear().range([0, height]).domain(scope.spatialextent[1]);

            tip = $rootScope.tip;

            var lineFunction = d3.svg.line()
                .x(function(d) { return x(d[0]); })
                .y(function(d) { return y(d[1]); })
                .interpolate("linear");

            var svg = d3.select(iElement[0]).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");;
            
            svg.call(tip);

            temp = {}
            maxIntrazonal = 0
            _.each(scope.zones, function(z) {
                temp[z.name] = z
                if (z.vehiculeTripsByZone.IntraZonal > maxIntrazonal)
                    maxIntrazonal = z.vehiculeTripsByZone.IntraZonal;
            });
            scope.zones = temp
            var chargeIntrazonal = d3.scale.linear().range([2.5, 15]).domain([0, maxIntrazonal]);
            delete temp

            getLoadVisuValue = function(d) {
                if (scope.loadvisu == "sum") return d.linkVolumes.AB + d.linkVolumes.BA
                else if (scope.loadvisu == "AB") return d.linkVolumes.AB
                else if (scope.loadvisu == "BA") return d.linkVolumes.BA
                else return d.linkVolumes.AB + d.linkVolumes.BA;
            }

            // watch for data changes and re-render
            scope.$watch('loadvisu', function(newVals, oldVals) {
                if (loadsExtent.length) {
                    scope.loadvisu = newVals
                    console.log("scope.loadvisu", scope.loadvisu);
                    loadsExtent = d3.extent(scope.links, function(d) {return getLoadVisuValue(d)});
                    var charge = d3.scale.linear().range([0.1, 10], .2).domain([0, loadsExtent[1]]);

                    svg.selectAll("path.link")
                        .attr("stroke-width", function(d) { return charge(getLoadVisuValue(d)); });
                };
            }, true);
            scope.$watch('links', function(newVals, oldVals) {
              return scope.render(newVals);
            }, true);

            // define render function
            scope.render = function(links){
                loadsExtent = d3.extent(links, function(d) {return getLoadVisuValue(d)});
                var charge = d3.scale.linear().range([0.1, 10], .2).domain([0, loadsExtent[1]]);

                svg.selectAll("path.link")
                    .data(links)
                  .enter().append("path")
                    .attr("class", "link")
                    .attr("d", function(d) {
                        return lineFunction([d.ptA, d.ptB]);
                    })
                    .attr("stroke", function(d) { return (d.type == 3)?"#007f00":"#7f0000"; })
                    .attr("stroke-width", function(d) { return charge(getLoadVisuValue(d)); })
                    .attr("fill", "none")
                    .on('mouseover', function(d) {
                        tip.show(d.nom+", #"+d.id+", type "+d.type+"<br>Params:<em>["+d.params.join(", ")+"]</em><br>linkVolume:<em>[AB:"+d.linkVolumes.AB+", BA:"+d.linkVolumes.BA+"]</em>");
                    })
                    .on('mouseout', tip.hide);

                svg.selectAll("circle.node")
                    .data(scope.nodes)
                  .enter().append("circle")
                    .attr("class", "node")
                    // .on("click", function(d, i){return scope.onClick({item: d});})
                    .attr("cx", function(d) { return x(d.coords[0]); })
                    .attr("cy", function(d) { return y(d.coords[1]); })
                    .attr("r", function(d) { return chargeIntrazonal(
                        (d.type==2)?scope.zones[d.nom].vehiculeTripsByZone.IntraZonal:0
                    )})
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 1)
                    .attr("fill", function(d) { return (d.type == 2)?"#007f00":"#7f0000"; })
                    .on('mouseover', function(d) {
                        tip.show(d.nom+", #"+d.id+", type "+d.type+"<br><em>["+d.params.join(", ")+"]</em>"+((d.type==2)?"<br><em>vehiculeTripsByZone.IntraZonal: ["+scope.zones[d.nom].vehiculeTripsByZone.IntraZonal+"]</em>":""));
                    })
                    .on('mouseout', tip.hide);
            };
        }
    };
});

