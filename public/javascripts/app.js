(function() {
	'use strict';
	angular.module('AppPost',['ui.router','ngMaterial','ngMessages'])
    .config(['$stateProvider','$urlRouterProvider', '$mdThemingProvider' ,
    	function ($stateProvider, $urlRouterProvider , $mdThemingProvider) {
			
			$stateProvider
		      .state('lerpost', {
		      	url: '/lerpost',
		      	templateUrl: 'lerpost',
		      	controller: 'LerPostCtrl'
		      })
          .state('add-post', {
            url: '/add-post',
            templateUrl: 'add-post',
            controller: 'AddPostCtrl'
          })
		      .state('post-details', {
		      	url: '/post-details/:postId',
		      	templateUrl: 'post-details',
		      	controller: 'PostCrtlDatails'
		      })
		      .state('contato', {
		      	url: '/contato',
		      	templateUrl: 'contato'
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
	.controller('LerPostCtrl',['$scope','ajaxService', function ($scope, ajaxService) {
		ajaxService.get('post')
			.success(function(data) {
				$scope.posts = data;
			})
			.error(function(data, status) {
				console.log(data , status);
			});
	}])
  .controller('AddPostCtrl', ['$scope','ajaxService',  function ($scope,ajaxService) {
    $scope.click = function(post) {
      ajaxService.postar('post',post)
        .success(function(data, status) {
          console.log(data , status);
        })
        .error(function(data, status) {
          console.log(data , status);
        });
    };
  }])
  .controller('PostCrtlDatails', ['$scope','$stateParams','ajaxService',
   function ($scope,$stateParams, ajaxService) {
   
      ajaxService.get('post',$stateParams.postId)
        .success(function(data) {
          $scope.post = data;
        })
        .error(function(data, status) {
          console.log(data , status);
        });
  }])
	.controller('TutoriaisCtrl', ['$scope', function ($scope) {
		$scope.tutoriais = [
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
			{id: 123 , titulo : "nodeJS" , link : "http://youtube.de" ,  resumo : "nodeJS Poder"},
		];
	}])
	.controller('MenuLateralCtrl', ['$mdSidenav', '$log', function ($mdSidenav,$log) {
		var menuLeft = this;
		menuLeft.toggleRight = function toggleRightOpen() {
      $mdSidenav('left')
        .toggle()
        .then(function () {
          $log.debug("toggle is done");
        });
    };
	}])
	.controller('LeftNavCtrl',['$mdSidenav', '$log',function ($mdSidenav, $log) {
		var leftNav = this;
    leftNav.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close left is done");
        });
    };
  }]);
})();




	
