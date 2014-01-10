var App = angular.module('hubflow', ['ngRoute','templates']);

App.config(function ($routeProvider) {
    $routeProvider
      .when('/', 									{  templateUrl: 'states/intro.html'})
      .when('/gitflow', 					{  templateUrl: 'states/introducinggitflow.html'})
      .when('/hubflow', 					{  templateUrl: 'states/hubflowtools.html'})
      .when('/gitflowwithgithub', {  templateUrl: 'states/gitflowwithgithub.html'})
      .when('/versioning', 				{  templateUrl: 'states/versioning.html'})
      .when('/examples', 					{  templateUrl: 'states/examples.html'})
      .when('/changelog', 				{  templateUrl: 'states/changelog.html'})
      .otherwise({
        redirectTo: '/'
      });
  });