angular
  .module('login',[])
  .controller("loginUserController", ['$scope', function ($scope) {
    $scope.login = { Username: "", Password: "", Email: ""};
//    $scope.continue = function($scope) {
//        supersonic.ui.initialView.dismiss();
//    }
    $scope.loginUser = function($scope) {
        var name = this.user.Username;
        var password = this.user.Password;
        
        Parse.User.logIn(name, password, {
            success: function(user) {
                alert("Login successfully!");
//                $scope.dismissInitial();
                supersonic.ui.initialView.dismiss();
                // Do stuff after successful login.
            },
            error: function(user, error) {
    // The login failed. Check error to see why.
                alert("Error: " + error.code + " " + error.message);
                window.location.href='index.html';
            }
        });          
    };
//    $scope.continue = function($scope) {
//        $scope.dismissInitial();
//    }

    $scope.addUser = function($scope) {
        supersonic.ui.initialView.dismiss();
     
        var user = new Parse.User();
        user.set("username", this.user.Username);
        user.set("password", this.user.Password);
        user.set("email", this.user.Email);
        
//        var user = new Parse.User();
//        user.set("username", "name");
//        user.set("password", "password");
//        user.set("email", "email@gmail.com");
 
        user.signUp(null, {
            success: function(user) {
                alert("A new user Created!");
                loginUser();
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