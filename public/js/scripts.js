var app = angular.module('myApp', ['ngRoute']);

var pageController = app.controller('pageController', function() {
});

app.config(
	function($routeProvider, $locationProvider){
		$routeProvider.
		when('/', {
			template: `<items-list></items-list>`
		}).
		when('/item/:itemId', {
			template: `<item-detail></item-detail>`
		}).
		otherwise({
			redirectTo: '/404'
		});
		$locationProvider.html5Mode(true);
})
