angular.module('studyInfo', [
  // Declare any module-specific AngularJS dependencies here
  'common'
]);

angular
  .module('studyInfo')
  .controller('IndexController', function($scope, supersonic) {
    // Controller functionality here
              Parse.initialize("susDpNWLgi3QqeprNxBKeQ7uIJK0srYlde52neVb", "OMWpK5Oa17fiNcDyTkqvbKz2HHL6szH4jPYXlhz0");
              
              var template = $("#eventTemplate").html();
              us_template = _.template(template);
              var createEvent = function(a)
              {
              $("#events").append(us_template(a));
              }
              
              //var TestObject = Parse.Object.extend("TestObject");
              //var testObject = new TestObject()
              //testObject.save({foo: "Frank123"}).then(function(object) {});
              
              var EventObject = Parse.Object.extend("event");
              var query = new Parse.Query(EventObject);
              query.include('lab');
              
              query.find({
                         success: function(results)
                         {
                         for (var i = 0; i<results.length; i++)  //The length of data should be mutable
                         {

                         if results[i].objectId == steroids.view.params.objectId
                         {
                         var object = results[i].attributes;
                         
                         //object.iconURL = object.lab.attributes.Icon._url;
                         //createEvent(object);
                         $scope.item = results[i];
                         }
                         }
                         
                         //document.write("success");
                         // The object was retrieved successfully.
                         document.getElementById("1").innerHTML = "success";
                         
                         },
                         error: function(object, error)
                         {
                         
                         //document.write("failure");
                         // The object was not retrieved successfully.
                         // error is a Parse.Error with an error code and message.
                         document.getElementById("1").innerHTML = "error";
                         }
                         });

  });

