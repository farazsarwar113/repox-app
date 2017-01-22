angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('all-repo-gitlab', {
        url: '/repositories/gitlab',
        templateUrl: 'src/all-repo/all-repo.html',
        controller: 'AllRepoCtrl',
        resolve: {
          r_repositories: function (dataService, $localStorage) {
            var data = {
              private_token: $localStorage.private_token
            };
            return dataService.gitlab.repositories(data);
          }
        }
      })
      .state('all-repo-github', {
        url: '/repositories/github',
        templateUrl: 'src/all-repo/all-repo.html',
        controller: 'AllRepoCtrl',
        resolve: {
          r_repositories: function (dataService) {
            return dataService.github.repositories();
          }
        }
      })


  });
