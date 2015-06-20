(function() {
	'use strict';
	angular.module('AppPost',['ui.router','ngMaterial'])
    .config(['$stateProvider','$urlRouterProvider', '$mdThemingProvider' ,
    	function ($stateProvider, $urlRouterProvider , $mdThemingProvider) {
			
			$stateProvider
		      .state('lerpost', {
		      	url: '/lerpost',
		      	templateUrl: 'lerpost',
		      	controller: 'LerPostCtrl'
		      })
		      .state('post-details', {
		      	url: '/post-details',
		      	templateUrl: 'post-details',
		      	controller: 'PostCrtlDatails'
		      })
		      .state('contato', {
		      	url: '/contato',
		      	templateUrl: 'contato',
		      	controller: 'ContatoCtrl'
		      })
		      .state('tutoriais', {
		      	url: '/tutoriais',
		      	templateUrl: 'tutoriais',
		      	controller: 'TutoriaisCtrl'
		      });		      	     
		      
		    $urlRouterProvider.otherwise('/lerpost');

				$mdThemingProvider.theme('default')
					.primaryPalette('blue')
				  .accentPalette('light-blue');
	}])
	.controller('LerPostCtrl', function ($scope, $http) {
		$http.get('/api/post/')
			.success(function(data) {
				$scope.posts = data;
			})
			.error(function(data, status) {
				console.log(data , status);
			});
	})
	.controller('PostCrtlDatails', ['$scope', function ($scope) {
		
	}])
	.controller('ContatoCtrl', ['$scope', function ($scope) {
		
	}])
	.controller('TutoriaisCtrl', ['$scope', function ($scope) {
		$scope.tutoriais = [
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
		];
		
	}]);
})();




	
