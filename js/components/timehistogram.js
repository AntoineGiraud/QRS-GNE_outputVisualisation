app.directive('timehistogram', function($rootScope) {
    return {
        restrict: 'EA',
        scope: {
          odtemps: "="
        },
        link: function(scope, iElement, iAttrs) {
            var margin = {top: 30, right: 30, bottom: 30, left: 30},
            width = 400 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

            var x = d3.scale.linear().range([0, width]);
            // var x = d3.time.scale().range([0, width], .2).domain(scope.range);
            // var widthBar = x(d3.time.day.offset(scope.range[0], +1)) - x(scope.range[0]) -1
            // var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(d3.time.week, 1).tickFormat("")

            var y = d3.scale.linear().range([height, 0]);

            tip = $rootScope.tip

            var svg = d3.select(iElement[0]).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            svg.call(tip);

            // watch for data changes and re-render
            // scope.$watch('data', function(newVals, oldVals) {
            //     if (newVals.rendervisu.perdayload == true){ newVals.rendervisu.perdayload = false
            //         return scope.render(newVals);
            //     }else console.log("won't render perdayload", oldVals, newVals);
            // }, true);

            scope.render = function(odtemps){
                values = []
                _.each(odtemps, function(z) {
                    zValues = z.od.split(",")
                    zValues.shift()
                    _.each(zValues, function(v) {
                        values.push(parseInt(v))
                    });
                });

                console.log("values", values); 
                maxValues = d3.max(values);
                console.log("maxValues", maxValues); 
                maxValues = maxValues + 5 - maxValues % 5;
                console.log("maxValues", maxValues); 
                nbBins = parseInt(maxValues / 5)
                x.domain([0, maxValues]);
                console.log("nbBins", nbBins); 

                // Generate a histogram using twenty uniformly-spaced bins.
                var data = d3.layout.histogram().bins(x.ticks(nbBins))(values);
                console.log("data", data); 

                y.domain([0, d3.max(data, function(d) { return d.y; })]);
                var xAxis = d3.svg.axis().scale(x).orient("bottom");

                var bar = svg.selectAll(".bar")
                    .data(data)
                  .enter().append("g")
                    .attr("class", "bar")
                    .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

                bar.append("rect")
                    .attr("x", 1)
                    .attr("width", x(data[0].dx) - 1)
                    .attr("height", function(d) { return height - y(d.y); })
                    .on('mouseover', function(d) {
                        tip.show("x:"+d.x+", y:"+d.y);
                    })
                    .on('mouseout', tip.hide);

                bar.append("text")
                    .attr("dy", ".35em")
                    .attr("y", -6)
                    .attr("x", x(data[0].dx) / 2)
                    .attr("text-anchor", "middle")
                    .text(function(d) { return d.y; });

                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                var table = d3.select(iElement[0]).append("table").attr("class", "table-condensed table-striped table-bordered ")
                table.append("caption").text("Tableau des valeurs de l'histogramme")
                var thead = table.append("thead").append('tr'),
                    tbody = table.append("tbody");

                thead.append("th").text("key")
                thead.append("th").text("value")
                var rows = tbody.selectAll("tr")
                    .data(data)
                  .enter()
                    .append("tr");
                rows.append("td").text(function(d) {return d.x+"-"+(d.x+d.dx);})
                rows.append("td").text(function(d) {return d.y;})

            };
            scope.render(scope.odtemps);
        }
    };
});

