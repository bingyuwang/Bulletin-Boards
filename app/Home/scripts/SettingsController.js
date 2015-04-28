angular
  .module('Home')
  .controller('SettingsController', function($scope, supersonic) {
    $scope.navbarTitle = "Settings";
      supersonic.ui.initialView.show();
    var currentUser = Parse.User.current();
      if (currentUser) {
          document.getElementById("Greeting").innerHTML = "Hello, " + currentUser.get("username");
          document.getElementById("logbutton").innerHTML = "Log off";
    // do stuff with the user
      } else {
    // show the signup or login page
          document.getElementById("Greeting").innerHTML = "You have not login yet.";
          document.getElementById("logbutton").innerHTML = "Login or Signup";
      }
//      $scope.logoff() = function($scope) {
//          supersonic.ui.initialView.show();
//      }

  });
