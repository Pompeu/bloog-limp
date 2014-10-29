
var postsApp = angular.module('App',[]);
	postsApp.controller('AppCtrl', function($scope, $http){
	$http.get('/posts/')
		.then(function(retorno){
			$scope.posts = retorno.data;
		});
    });
