angular.module('myApp')

  .controller('loginCtrl', function($scope,$ionicSlideBoxDelegate, $state, dataService,$ionicPopup,$localStorage, Restangular,$rootScope,$timeout) {
    $scope.user = {};

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

    $scope.login = function () {
      console.log($scope.user);
      dataService.user.login($scope.user).then(function (res) {
        console.log(res.data);
        $ionicPopup.alert({
          title: 'Success!!',
          template: 'Successfully logged in'
        }).then(function (popup) {
          $scope.popup = popup;
        });
        $localStorage.token = res.data.token;
        Restangular.setDefaultHeaders({'x-access-token' : res.data.token});
        $rootScope.user = res.data.user;
        console.log($rootScope.user);
        $state.go('profile');
      },function(err){
        console.log(err);
        $ionicPopup.alert({
          title: 'Error!!',
          template: 'Incorrect username or password.'
        }).then(function (popup) {
          $scope.popup = popup;
        });
      });
    }
  });
