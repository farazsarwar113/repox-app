angular.module('myApp')

  .controller('HomeCtrl', function($scope,$ionicSlideBoxDelegate, $state,$ionicModal, $timeout) {

    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
