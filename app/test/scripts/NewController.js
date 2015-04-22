angular
  .module('test')
  .controller("NewController", function ($scope, Test, supersonic) {
    $scope.test = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newtest = new Test($scope.test);
      newtest.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });