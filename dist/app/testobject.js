angular.module('testobject', [
  /* Declare any module-specific dependencies here */
  'common'
]);
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
angular
  .module('testobject')
  .constant('Testobject', supersonic.data.model('TestObject'));