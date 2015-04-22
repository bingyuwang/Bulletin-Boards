angular
  .module('test')
  .controller("EditController", function ($scope, Test, supersonic) {
    $scope.test = null;
    $scope.showSpinner = true;

    // Fetch an object based on id from the database
    Test.find(steroids.view.params.id).then( function (test) {
      $scope.$apply(function() {
        $scope.test = test;
        $scope.showSpinner = false;
      });
    });

    $scope.submitForm = function() {
      $scope.showSpinner = true;
      $scope.test.save().then( function () {
        supersonic.ui.modal.hide();
      });
    }

    $scope.cancel = function () {
      supersonic.ui.modal.hide();
    }

  });
