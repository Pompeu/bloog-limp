(function() {
	'use strict';
	angular.module('AppPost',
		[
			'ngRoute',
			'ngMaterial',
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
		      .when('/post-datails', {
		      	templateUrl: '/post-datails',
		      	controller: 'PostCrtlDatails'
		      })		     
		      .otherwise({
		        redirectTo: '/lerpost',
		      });
	})
	.controller('LerPostCtrl', function ($scope, $http) {
		$http.get('/api/post/')
			.success(function(data) {
				$scope.posts = data;
			})
			.error(function(data, status) {
				console.log(data , status);
			});
	});
})();




	
