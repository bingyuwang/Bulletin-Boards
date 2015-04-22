angular.module('test', [
  /* Declare any module-specific dependencies here */
  'common'
]);
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
angular
  .module('test')
  .constant('Test', supersonic.data.model('test'));