(function(){
  angular
  .module('AppPost')
  .controller('LerPostCtrl',['$scope','ajaxService','$rootScope', function ($scope, ajaxService, $rootScope) {
    ajaxService.get('posts')
      .success(function(data) {
        $rootScope.posts = data.results;
      })
      .error(function(data, status) {
        console.log(data , status);
      });
  }])
  .controller('AddPostCtrl', ['$scope','ajaxService','$state', 
    function ($scope, ajaxService, $state) {
    $scope.click = function(post) {
      ajaxService.post('posts',post)
        .then(function success(data) {
         $state.go('post-details/'+data.data.result._id);
        },function err() {
          console.log(arguments);
        });
        
    };
  }])
  .controller('PostCrtlDatails', ['$scope','$stateParams','ajaxService',
   function ($scope,$stateParams, ajaxService) {
     
      ajaxService.get('posts',$stateParams.postId)
        .success(function(data) {
          $scope.post = data.result[0];
        })
        .error(function(data, status) {
          console.log(data , status);
        });
  }])
  .controller('LoginCtrl', ['$scope','$mdDialog', function ($scope, $mdDialog) {
    
    $scope.showLogin = function(ev) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: '../partials/tmpl/loginform.tmpl.html',
          parent: angular.element(document.body),
          targetEvent: ev,
        })
        .then(function(answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.alert = 'You cancelled the dialog.';
        });
    };
    DialogController.$inject = ['$state' ,'$rootScope' ,'$scope', '$mdDialog', 'ajaxService', '$http'];
    function DialogController($state ,$rootScope ,$scope, $mdDialog, ajaxService, $http) {
        $scope.logar = function(user) {
          ajaxService.post("users/auth",user)
            .then(function success(res) {
              if(res.data.result.id_token){                
                localStorage.setItem('id_token', res.data.result.id_token);
                $rootScope.user = res.data.result.id_token;
                $scope.message = null;
                $scope.cancel();
                $state.go('lerpost');
              }              
            },function err() {
              $scope.message = "credencias invalidas";
            });
        };
        $scope.cancel = function() {
          $mdDialog.cancel();
        }; 
    }
  }])
  .controller('LogoutCtrl', ['$scope','$rootScope','$state', function ($scope, $rootScope, $state) {
    $scope.logout = function() {
      $rootScope.user = null;
      localStorage.removeItem('id_token');
      $state.go('lerpost');
    };
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
  }])
  .controller('SearchCtrl', ['$scope', '$mdSidenav', '$mdUtil',
   function ($scope, $mdSidenav, $mdUtil) {
    $scope.open = buildToggler('right');

    function buildToggler(navID) {
      return $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle();
          },100);      
    }
   
  }])
  .controller('RightCtrl',['$scope', '$mdSidenav','ajaxService','$state','$rootScope',
   function ($scope, $mdSidenav, ajaxService, $state, $rootScope ) {
    $scope.close = function (searchTerm) {
      ajaxService.get("posts/fulltext",searchTerm)
        .then(function(data) {
         $rootScope.posts = data.data.results;
           if(data.data.results){
            $mdSidenav('right').close();
            $state.go('lerpost'); 
           }
        });             
    };
  }]);
}());
