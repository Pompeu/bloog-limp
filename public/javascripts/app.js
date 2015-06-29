(function() {
	'use strict';
	angular.module('AppPost',['ui.router','ngMaterial','ngMessages', 'angular-jwt'])
    .config(['$stateProvider','$urlRouterProvider', '$mdThemingProvider' ,
    	function ($stateProvider, $urlRouterProvider , $mdThemingProvider) {
			
			$stateProvider
		      .state('lerpost', {
		      	url: '/lerpost',
		      	templateUrl: 'lerpost',
		      	controller: 'LerPostCtrl'
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
		      })
          .state('add-post', {
            url: '/add-post',
            templateUrl: 'add-post',
            controller: 'AddPostCtrl'
          });		      	     
		      
		    $urlRouterProvider.otherwise('/lerpost');

				$mdThemingProvider.theme('default')
					.primaryPalette('blue')
				  .accentPalette('light-blue');
	}])
  .run(['$http' ,'$rootScope', 'jwtHelper',function ($http ,$rootScope, jwtHelper) {
    var token = $rootScope.token || localStorage.getItem('id_token');    
    $rootScope.$on("$locationChangeStart",
      function (event, next, current){
      if(token){
        $rootScope.user = jwtHelper.decodeToken(token );
        $http.defaults.headers.common.Authorization = 'Bearer '+token;
      }
    });
  }]);
	
})();
