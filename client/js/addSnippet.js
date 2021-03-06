//this is all done. dont touch

angular.module('sniphub.addSnippet', [])

.controller('AddSnippetController', function ($scope, $location, SniphubServices, $state) {
  $scope.submitted = function(){
    //here just let the user know they submitted the thing
    $state.go('snippets');
  }
  //call another method in services
  $scope.postSnippet = function (  user, text, title, tabPrefix, scope  ) {
    SniphubServices.addSnippet( user, text, title, tabPrefix, scope ).then(function ( response ) {
      $scope.submitted();
    });
  };
});
