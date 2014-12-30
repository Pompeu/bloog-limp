(function() {
	'use strict';
	angular.module('AppPost',
		[
			'ngRoute',
			'angularUtils.directives.dirPagination'
		])
    .config(function ($routeProvider) {
			$routeProvider
		       .when('/login', {
		      	templateUrl: '/login',
		      	controller: 'LoginCtrl'
		      })
		      .when('/register', {
		      	templateUrl: '/register',
		      	controller: 'RegistrarCtrl'
		      })		     
		      .when('/postar', {
		        templateUrl: '/postar',
		        controller: 'PostarCrtl'
		      })
		      .when('/lerpost', {
		      	templateUrl: '/lerpost',
		      	controller: 'LerPostCtrl'
		      })
		      .when('/contato', {
		      	templateUrl: '/contato',
		      	controller: 'ContatoCtrl'
		      })		     
		      .otherwise({
		        redirectTo: '/lerpost',
		      });
	})
	.controller('PostarCrtl', function ($scope) {
		
	})
	.controller('LerPostCtrl', function ($scope, $http) {
		$http.get('/api/post/')
			.success(function(data) {
				$scope.posts = data;
			})
			.error(function(data, status) {
				console.log(data , status);
			})
	})
	.controller('LoginCtrl', function ($scope) {
		
	})
	.controller('RegistrarCtrl',function ($scope) {
		
	})
	.controller('ContatoCtrl', function ($scope) {
		
	})
})();




	
