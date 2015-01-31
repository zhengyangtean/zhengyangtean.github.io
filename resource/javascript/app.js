'use strict';

/* App Module */

var webApp = angular.module('webApp', ['ngRoute', 'webAppControllers']);

webApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/#', {
			templateUrl: 'view/home.html',
			controller: 'lifeInSFCtrl'
		}).
		when('/life-in-sf', {
			templateUrl: 'view/home.html',
			controller: 'lifeInSFCtrl'
		}).
		otherwise({
			redirectTo: '/#'

		});
}]);