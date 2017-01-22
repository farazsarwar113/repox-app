angular.module('myApp')

  .controller('AllRepoCtrl', function($scope,$ionicSlideBoxDelegate, $state,$ionicModal, $localStorage,r_repositories,$ionicPopup,dataService,$timeout) {

    console.log(r_repositories.data);
    if(r_repositories.data.github){
      $scope.repositories = r_repositories.data.github;
      $scope.title = 'GitHub';
    }
    else if(r_repositories.data.gitlab){
      $scope.repositories = r_repositories.data.gitlab;
      $scope.title = 'GitLab';
    }
    $scope.repo = {};

    $ionicModal.fromTemplateUrl('add-reo-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.goTo = function (state) {
      $state.go(state);
    };
    $scope.deleteRepo = function (index, event, repo) {
      console.log(repo);
      console.log(index);
      event.stopPropagation();
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure you want to delete '+repo.name
      });
      confirmPopup.then(function(res) {
        if(res) {
          console.log('You are sure');
          if($scope.title = 'Gitlab'){
            var data = {};
            data.private_token = $localStorage.private_token;
            dataService.gitlab.removeRepo(data,repo.id.toString()).then(function (res) {
              console.log(res.data);
              $scope.repositories.splice(index,1);

            },function (err) {
              console.log(err);
            });

          }
        } else {
          console.log('You are not sure');
        }
      });
    };
    $scope.addRepo = function (repo) {
      console.log('ascac');
      console.log(repo);
      var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="repo.password">',
        title: 'Please Confirm your Password',
        subTitle: 'This is for security purpose',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Ok</b>',
            type: 'button-positive',
            onTap: function(e) {
              if ($scope.title = 'GitHub') {
                myPopup.close();
                dataService.github.addRepo($scope.repo).then(function (res) {
                  console.log(res.data);
                  $scope.repositories.push(res.data);
                  e.preventDefault();
                },function (err) {
                  console.log(err);
                });
                e.preventDefault();
              }
              else if($scope.title = 'Gitlab'){
                $scope.repo.private_token = $localStorage.private_token;
                myPopup.close();
                dataService.gitlab.addRepo($scope.repo).then(function (res) {
                  console.log(res.data);
                  $scope.repositories.push(res.data);
                  e.preventDefault();
                },function (err) {
                  console.log(err);
                });
                e.preventDefault();
              }
            }
          }
        ]
      });

      myPopup.then(function(res) {
        console.log('Tapped!', res);
        $scope.modal.hide();
      });
    }
  });
