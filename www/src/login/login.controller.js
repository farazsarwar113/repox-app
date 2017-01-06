angular.module('myApp')

  .controller('loginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.lockSlide = function () {
      $ionicSlideBoxDelegate.enableSlide( false );
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
