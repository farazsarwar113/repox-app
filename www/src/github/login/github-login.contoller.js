angular.module('myApp')

  .controller('GitHubLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
