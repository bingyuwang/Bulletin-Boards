angular
  .module('testobject')
  .controller("EditController", function ($scope, Testobject, supersonic) {
    $scope.testobject = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Testobject.find(steroids.view.params.id).then( function (testobject) {
      $scope.$apply(function() {
        $scope.testobject = testobject;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.testobject.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
