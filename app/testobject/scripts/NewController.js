angular
  .module('testobject')
  .controller("NewController", function ($scope, Testobject, supersonic) {
    $scope.testobject = {};

    $scope.submitForm = function () {
      $scope.showSpinner = true;
      newtestobject = new Testobject($scope.testobject);
      newtestobject.save().then( function () {
        supersonic.ui.modal.hide();
      });
    };

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });