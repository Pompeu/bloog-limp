(function(){
  angular.module('AppPost')
  .directive('renderHtml', ['$compile', function ($compile) {
      return {
        restrict: 'E',
        scope: {
          html: '='
        },
        link: function postLink(scope, element, attrs) {
          function appendHtml() {
              if(scope.html) {
                  var newElement = angular.element(scope.html);
                  $compile(newElement)(scope);
                  element.append(newElement);
              }
          }
          scope.$watch(function() { return scope.html; }, appendHtml);
        }
      };
    }]);
}());

