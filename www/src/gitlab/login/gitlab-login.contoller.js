angular.module('myApp')

  .controller('GitLabLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
