angular
  .module('test')
  .controller("IndexController", function ($scope, Test, supersonic) {
    $scope.tests = null;
    $scope.showSpinner = true;

    Test.all().whenChanged( function (tests) {
        $scope.$apply( function () {
          $scope.tests = tests;
          $scope.showSpinner = false;
        });
    });
  });