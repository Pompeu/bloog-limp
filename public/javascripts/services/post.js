(function(){
  angular.module('AppPost')
    .factory('ajaxService', ['$http',function ($http) {
            
      var service = {
        get : get,
        post : post,
        put: put,
        del : del
      };

      return service;

      function get(resorce , id) {
        if(id){
          return $http.get('/api/'+resorce+'/'+id);
        }        
        return $http.get('/api/'+resorce);
      }

      function post(resorce, body) {
        return $http.post('/api/'+resorce, body);
      }

      function put(resorce ,body) {
        return $http.put('/api/'+resorce, body);
      }

      function del(resorce, id) {
        return $http.del('/api/'+resorce+'/'+id);
      }

    }]);
}());