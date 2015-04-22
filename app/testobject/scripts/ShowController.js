angular
  .module('testobject')
  .controller("ShowController", function ($scope, Testobject, supersonic) {
    $scope.testobject = null;
    $scope.showSpinner = true;
    $scope.dataId = undefined;

    var _refreshViewData = function () {
      Testobject.find($scope.dataId).then( function (testobject) {
        $scope.$apply( function () {
          $scope.testobject = testobject;
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
      $scope.testobject.delete().then( function () {
        supersonic.ui.layers.pop();
      });
    }
  });