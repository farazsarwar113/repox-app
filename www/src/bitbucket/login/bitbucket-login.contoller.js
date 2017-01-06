angular.module('myApp')

  .controller('BitBucketLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicModal, $timeout) {
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
