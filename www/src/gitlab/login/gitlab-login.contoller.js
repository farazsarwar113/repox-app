angular.module('myApp')

  .controller('GitLabLoginCtrl', function($scope,$ionicSlideBoxDelegate, $state, dataService,$localStorage, $ionicPopup) {

    $scope.gitlab = {};

    $scope.goTo = function (state) {
      $state.go(state);
    };
    $scope.gitlabLogin =  function () {
      console.log($scope.gitlab);

      // $ionicPopup.alert({
      //   title: 'Success!!',
      //   template: 'Successfully logged in to GitLab account'
      // }).then(function (popup) {
      //   $scope.popup = popup;
      // });

      dataService.gitlab.login($scope.gitlab).then(function (res) {
        console.log(res.data);
        $ionicPopup.alert({
          title: 'Success!!',
          template: 'Successfully logged in to GitLab account'
        }).then(function (popup) {
          $scope.popup = popup;
        });
        $localStorage.private_token = $scope.gitlab.private_token;
        $state.go('all-repo-gitlab');
      },function (err) {
        console.log(err);
      });
    }
  });
