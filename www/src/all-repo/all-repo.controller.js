angular.module('myApp')

  .controller('AllRepoCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
