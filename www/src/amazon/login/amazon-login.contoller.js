angular.module('myApp')

  .controller('AmazonLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
