var loginRegisterApp = angular.module('loginRegisterApp', ['ngRoute']);


loginRegisterApp.config(function($routeProvider) {
    $routeProvider
            .when('/', {
                templateUrl: 'partials/login.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'partials/about.html',
                controller: 'mainController'
            });
});

loginRegisterApp.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
});
