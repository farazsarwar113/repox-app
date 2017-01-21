angular.module('myApp')

  .controller('AllRepoCtrl', function($scope,$ionicSlideBoxDelegate, $state,$ionicModal, r_repositories,$ionicPopup,$timeout) {

    console.log(r_repositories.data);
    if(r_repositories.data.github){
      $scope.repositories = r_repositories.data.github;
      $scope.title = 'GitHub';
    }
    else if(r_repositories.data.gitlab){
      $scope.repositories = r_repositories.data.gitlab;
      $scope.title = 'GitLab';
    }
    $scope.goTo = function (state) {
      $state.go(state);
    };
    $scope.deleteRepo = function (index, event, repo) {
      console.log(repo);
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure you want to delete '+repo.name
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
        } else {
          console.log('You are not sure');
        }
      });
    }
  });
