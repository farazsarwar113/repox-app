angular.module('myApp')

  .controller('GitLabProfileCtrl', function($scope,$ionicSlideBoxDelegate, $state,r_Gprofile,$ionicModal, $timeout) {

    console.log(r_Gprofile);
    $scope.gitlabProfile = r_Gprofile;
    $scope.goTo = function (state) {
      $state.go(state);
    };
  });
