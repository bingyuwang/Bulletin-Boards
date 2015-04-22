angular
  .module('testobject')
  .controller("IndexController", function ($scope, Testobject, supersonic) {
    $scope.testobjects = null;
    $scope.showSpinner = true;

    Testobject.all().whenChanged( function (testobjects) {
        $scope.$apply( function () {
          $scope.testobjects = testobjects;
          $scope.showSpinner = false;
        });
    });
  });