angular.module('myApp')

  .controller('RepoCtrl', function($scope,$ionicSlideBoxDelegate, $state,$ionicModal, r_repository,$ionicPopup,$timeout) {

    console.log(r_repository.data);
    if(r_repository.data.github){
      $scope.repository = r_repository.data.github.repository;
      $scope.contents = r_repository.data.github.contents;
      $scope.title = 'GitHub';
    }
    else if(r_repository.data.gitlab){
      $scope.repository = r_repository.data.gitlab.repository;
      $scope.contents = r_repository.data.gitlab.contents;
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
