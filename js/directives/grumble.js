(function(){
  var directives = angular.module('grumbleDirectives',[]);
  directives.directive('grumble', function(){
    return {
      templateUrl: "views/grumbles/_grumble.html"
      restrict: "EA",
      link: function(scope, element, attributes){
        scope.Grumble = scope.grumbleCtrl.grumble;
      }
  }
  });

directives.directive('')


})();
