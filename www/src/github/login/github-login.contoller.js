angular.module('myApp')

  .controller('GitHubLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, $ionicPopup, dataService) {
    $scope.github = {};

    $scope.goTo = function (state) {
      $state.go(state);
    };

    $scope.githubLogin = function(){
      console.log($scope.github);
      dataService.github.login($scope.github).then(function (res) {
        console.log(res.data);
        $ionicPopup.alert({
          title: 'Success!!',
          template: 'Successfully logged in to Github account'
        }).then(function (popup) {
          $scope.popup = popup;
        });
        $state.go('all-repo-github');
      },function (err) {
        console.log(err);
      });
    }
  });
