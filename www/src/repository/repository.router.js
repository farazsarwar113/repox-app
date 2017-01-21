angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('repo-github', {
        url: '/repository/:repo_name',
        templateUrl: 'src/repository/repository.html',
        controller: 'RepoCtrl',
        resolve: {
          r_repository: function (dataService,$stateParams) {
            return dataService.github.getRepo($stateParams.repo_name);
          }
        }
      })
      .state('repo-gitlab', {
        url: '/repository/:rid',
        templateUrl: 'src/repository/repository.html',
        controller: 'RepoCtrl',
        resolve: {
          r_repository: function (dataService, $localStorage,$stateParams) {
            var data = {
              private_token: $localStorage.private_token
            };
            return dataService.gitlab.getRepo($stateParams.rid,data);
          }
        }
      })


  });
