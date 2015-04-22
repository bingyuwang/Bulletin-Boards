angular
  .module('test')
  .controller("ShowController", function ($scope, Test, supersonic) {
    $scope.test = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Test.find($scope.dataId).then( function (test) {
        $scope.$apply( function () {
          $scope.test = test;
          $scope.showSpinner = false;
        });
      });
    }

    supersonic.ui.views.current.whenVisible( function () {
      if ( $scope.dataId ) {
        _refreshViewData();
      }
    });

    supersonic.ui.views.current.params.onValue( function (values) {
      $scope.dataId = values.id;
      _refreshViewData();
    });

    $scope.remove = function (id) {
      $scope.showSpinner = true;
      $scope.test.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });