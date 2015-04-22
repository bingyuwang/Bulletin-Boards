angular
  .module('login',[])
  .controller("NewuserController", ['$scope', function ($scope) {
    $scope.user = { Username: "", Password: ""};
      
    $scope.addUser = function($scope) {
     
        var user = new Parse.User();
        user.set("username", this.user.Username);
        user.set("password", this.user.Password);
        
//        var user = new Parse.User();
//        user.set("username", "name");
//        user.set("password", "password");
//        user.set("email", "email@gmail.com");
 
        user.signUp(null, {
            success: function(user) {
                alert("A new user Created!");
                // Hooray! Let them use the app now.
                supersonic.ui.initialView.dismiss();
            },
            error: function(user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='index.html';
            }
        });
    };
  }]);
