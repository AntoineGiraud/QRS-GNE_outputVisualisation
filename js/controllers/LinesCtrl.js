app.controller('LinesCtrl', function($scope, $timeout, $rootScope){
    ////////////////////////////////
    // Variables d'initialisation //
    ////////////////////////////////

    $scope.parseInt = parseInt;

    $rootScope.tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0]);

    $scope.loader = true;
    $scope.loadingMessage = "Chargement de l'application";

    $scope.order = {
        "query": "+id",
        "sign": "+",
        "class": "caretUp",
        "field": "id"
    }
    $scope.orderBy = function(field){
        if (field == $scope.order.field) {
            $scope.order.sign = ($scope.order.sign == "-")? "+": "-"
            $scope.order.class = ($scope.order.sign == "+")? "caretUp": "caretDown"
            $scope.order.query = $scope.order.sign + $scope.order.field
        } else {
            $scope.order = {
                "query": "+" + field,
                "sign": "+",
                "class": "caretUp",
                "field": field
            }
        };
    }

    var startTime = new Date().getTime(); 

    /////////////////////////////////////////////
    // Récupérons tous les stops du réseau ... //
    /////////////////////////////////////////////
    // stop_id;SRIDU;stop_lat;stop_lon;xmtm;ymtm;stop_name
    $scope.loader = true;
    $scope.loadingMessage = "Récupération arrêts du réseau";
    $scope.zones_json = zones_json
    $scope.nodes_json = nodes_json
    $scope.links_json = links_json

    $scope.zonesMaxProdAttr = 0
    $scope.zonesMaxVehTrips = 0
    _.each($scope.zones_json, function(z) {
        z.productions.HBW = Math.round(z.productions.HBW)
        z.attractions.HBW = Math.round(z.attractions.HBW)
        z.productions.NHB = Math.round(z.productions.NHB)
        z.attractions.NHB = Math.round(z.attractions.NHB)
        z.productions.HBNW = Math.round(z.productions.HBNW)
        z.attractions.HBNW = Math.round(z.attractions.HBNW)
        z.vehiculeTripsByZone.Leaving = Math.round(z.vehiculeTripsByZone.Leaving)
        z.vehiculeTripsByZone.IntraZonal = Math.round(z.vehiculeTripsByZone.IntraZonal)
        z.vehiculeTripsByZone.Entering = Math.round(z.vehiculeTripsByZone.Entering)

        $scope.zonesMaxProdAttr = Math.max($scope.zonesMaxProdAttr, z.productions.HBW + z.attractions.HBW, z.productions.NHB + z.attractions.NHB, z.productions.HBNW + z.attractions.HBNW)
        $scope.zonesMaxVehTrips = Math.max($scope.zonesMaxVehTrips, z.vehiculeTripsByZone.Leaving, z.vehiculeTripsByZone.IntraZonal, z.vehiculeTripsByZone.Entering)
    });
    $scope.loader = false;

    /////////////////////
    // Autre Fonctions //
    /////////////////////
    function getStopRTL(stop_id) {
        return clone(stopsRTL[stop_id])
    }
    function hasStopRTL(stop_id) {
        return (stopsRTL[stop_id])? true : false ;
    }
    /**
     * extentSpatialTrail permet de prolonger les frontières de a pour que b soit inclu dans celui-ci
     * @param  {[type]} a output
     * @param  {[type]} b input
     */
    function extentSpatialTrail (a, b) {
        if (a.length && b.length) {
            if (a[0][0] > b[0][0])
                a[0][0] = b[0][0];
            if (a[0][1] < b[0][1])
                a[0][1] = b[0][1];
            if (a[1][0] > b[1][0])
                a[1][0] = b[1][0];
            if (a[1][1] < b[1][1])
                a[1][1] = b[1][1];
        }else if(b.length){
            a.push([b[0][0], b[0][1]]);
            a.push([b[1][0], b[1][1]]);
        }
    }
    function squarifySpatialTrailExtent (trailExtent) {
        if (trailExtent.length) {
            deltaX = trailExtent[0][1] - trailExtent[0][0];
            deltaY = trailExtent[1][1] - trailExtent[1][0];
            if (deltaX < deltaY){
                trailExtent[0][0] -= (deltaY - deltaX) / 2;
                trailExtent[0][1] += (deltaY - deltaX) / 2;
            }else{
                trailExtent[1][0] -= (deltaX - deltaY) / 2;
                trailExtent[1][1] += (deltaX - deltaY) / 2;
            }
        };
    }


    $scope.d3OnClick = function(item){
        console.log(item); 
        $scope.addAlert("item: "+ item, "info", 1000);
    };
    // $scope.addAlert("Vous n'êtes pas connecté à Internet", "danger", 10000);
    // $scope.alertModal('Attention', "Vous n'êtes pas connecté à Internet");
});
