
var RouterDemoAppVar = angular.module("RouterDemoApp",['ngRoute']);
RouterDemoAppVar.config(function ($routeProvider){
        $routeProvider.when('/index',{
        templateUrl:"index.html",
        controller:"AppCtrlIndex"
    });
    
        $routeProvider.when('/PageA',{
        templateUrl:"PageA.html",
        controller:"PageAController"
    });
    
        $routeProvider.when('/PageB',{
        templateUrl:"PageB.html",
        controller:"PageBController"
    });
    
        $routeProvider.when('/PageC',{
        templateUrl:"PageC.html",
        controller:"PageCController"
    });
    
        $routeProvider.when('/PageD',{
        templateUrl:"PageD.html",
        controller:"PageDController"
    });
    
});

RouterDemoAppVar.controller("AppCtrlIndex", function($scope,$location){
    $scope.test = "hello this is AppCtrlIndex";
    
    $scope.print = function (parameters) {
        console.log($scope.test);
    };
    $scope.print();
    
        $scope.GoToPageA = function (parameters) {
      $location.path("/PageA");  
    };
        $scope.GoToPageB = function (parameters) {
      $location.path("/PageB");  
    };
        $scope.GoToPageC = function (parameters) {
      $location.path("/PageC");  
    };
        $scope.GoToPageD = function (parameters) {
      $location.path("/PageD");  
    };
});

RouterDemoAppVar.controller("PageAController", function($scope,$location){
    $scope.test = "hello this is PageAController";
    
    $scope.print = function (parameters) {
        console.log($scope.test);
    };
    $scope.print();
    
    $scope.GoToIndex = function (parameters) {
      $location.path("/index");  
    };
});

RouterDemoAppVar.controller("PageBController", function($scope,$location){
    $scope.test = "hello this is PageBController";
    
    $scope.print = function (parameters) {
        console.log($scope.test);
    };
    $scope.print();
    $scope.GoToIndex = function (parameters) {
    $location.path("/index");  
    };
});

RouterDemoAppVar.controller("PageCController", function($scope,$location){
    $scope.test = "hello this is PageCController";
    
    $scope.print = function (parameters) {
        console.log($scope.test);
    };
    $scope.print();
    $scope.GoToIndex = function (parameters) {
    $location.path("/index");  
    };
});

RouterDemoAppVar.controller("PageDController", function($scope,$location){
    $scope.test = "hello this is PageDController";
    
    $scope.print = function (parameters) {
        console.log($scope.test);
    };
    $scope.print();
    $scope.GoToIndex = function (parameters) {
    $location.path("/index");  
    };
});