angular.module('myApp')

  .controller('ProfileCtrl', function($scope,$ionicSlideBoxDelegate, $state, $rootScope,$ionicModal, $timeout) {
    setTimeout(function () {
      console.log($rootScope.user);
      $scope.user = $rootScope.user;
    },1000);
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
