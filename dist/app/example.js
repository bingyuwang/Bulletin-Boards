angular.module('example', [
  // Declare here all AngularJS dependencies that are shared by the example module.
  'supersonic','ngAnimate', 'parse-angular'
]);

angular
  .module('example')
  .controller('LearnMoreController', function($scope, supersonic) {

    $scope.navbarTitle = "Learn More";

  });

angular
  .module('example')
  .controller('SearchController', function($scope, supersonic) {
    $scope.navbarTitle = "Search";
  });
