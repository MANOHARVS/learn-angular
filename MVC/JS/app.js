// var App= angular.module("myApp",[]);

// App.controller("myCtr",function($scope){
//     // $scope.name="Welcome to AngularJS";
//     // $scope.people=[{
//     //     "name":"shashi",
//     //     "company":"qspiders",
//     //     "designation":"developer",
//     //     "salary":"10000"},
//     //     {
//     //     "name":"Raghu",
//     //     "company":"jspiders",
//     //     "designation":"developer",
//     //     "salary":"20000"},
//     //     {
//     //         "name":"Ram",
//     //         "company":"Zspiders",
//     //         "designation":"developer",
//     //         "salary":"30000"
//     //     }]

// });

var App = angular.module("myApp" , []); 
App.controller("myCtr" , ["$scope" ,"$http" , function($scope , $http){
//   $http.get("data.json").then(function(item){
     $http.get("https://api.github.com/users").then(function(item){
      $scope.players = item.data;
  });
   
}]);
