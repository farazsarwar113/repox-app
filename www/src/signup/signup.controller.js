angular.module('myApp')

  .controller('signUpCtrl', function($scope,$ionicSlideBoxDelegate,$ionicPopup, $state, dataService, $timeout) {

    $scope.user= {};

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

    $scope.signup = function () {
      console.log($scope.user);
      dataService.user.register($scope.user).then(function (res) {
        console.log(res.data);
        $ionicPopup.alert({
          title: 'Success!!',
          template: 'Successfully signed up'
        }).then(function (popup) {
          $scope.popup = popup;
        });
        //$scope.popup.show();
      },function (err) {
        console.log(err);
      })
    }

  });
