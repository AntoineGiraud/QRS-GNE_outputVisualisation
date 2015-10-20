app.controller('PageCtrl', function($scope, $timeout, $window, $rootScope, $modal, esFactory){

    ////////////////////////////////
    // Variables & Initialisation //
    ////////////////////////////////
    $scope.panneau = 0;
    $scope.loader = true;
    $scope.loadingMessage = "Chargement ...";

    $scope.es = esFactory({
        host: 'localhost:9200'
    });

    $scope.alerts = [
        // { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.', 'timeout':false },
        // { type: 'black', msg: 'Oh snap! Change a few things up and try submitting again.', 'timeout':false },
        // { type: 'success', msg: 'Well done! You successfully read this important alert message.', 'timeout':false }
    ];

    $scope.addAlert = function(msg, type, timeout) {
        type = type || ''
        timeout = timeout || false
        msg = msg || 'Another alert!'
        $scope.alerts.push({type:type, msg:msg, timeout:timeout});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.alertModal = function (title, msg) {
        scope = $rootScope.$new(true)
        scope.title = title;
        scope.content = msg;
        scope.alert = true;
        var modalInstance = $modal.open({
          animation: false,
          templateUrl: 'template/modal/modal.html',
          controller: function ($scope, $modalInstance) {
            $scope.ok = function () {
              $modalInstance.close('oki');
            };
            $scope.cancel = function () {
              $modalInstance.dismiss('cancel');
            };
          },
          scope: scope,
          size: 'sm'
        });

        // modalInstance.result.then(function (oki) {
        //   console.log(oki)
        // }, function () {
        //   $log.info('Modal dismissed at: ' + new Date());
        // });
    };

    // $scope.addAlert("Message bidon", "danger", 5000);
    // $scope.alertModal('Attention', "Vous n'êtes pas connecté à Internet");
});
