angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('repo-gitlab', {
        url: '/repository/gitlab/:rid',
        templateUrl: 'src/repository/repository.html',
        controller: 'RepoCtrl',
        resolve: {
          r_repository: function (dataService, $localStorage,$stateParams) {
            var data = {
              private_token: $localStorage.private_token
            };
            return dataService.gitlab.getRepo($stateParams.rid,data);
          },
          // r_commits: function (dataService,$stateParams) {
          //   var data = {
          //     private_token: $localStorage.private_token
          //   };
          //   return dataService.gitlab.getCommits($stateParams.rid,data);
          // },
          // r_members: function (dataService,$stateParams) {
          //   var data = {
          //     private_token: $localStorage.private_token
          //   };
          //   return dataService.gitlab.getMembers($stateParams.rid,data);
          // }
        }
      })
      .state('repo-github', {
        url: '/repository/github/:repo_name',
        templateUrl: 'src/repository/repository.html',
        controller: 'RepoCtrl',
        resolve: {
          r_repository: function (dataService,$stateParams) {
            return dataService.github.getRepo($stateParams.repo_name);
          },
          // r_commits: function (dataService,$stateParams) {
          //   return dataService.github.getRepo($stateParams.repo_name);
          // },
          // r_members: function (dataService,$stateParams) {
          //   return dataService.github.getRepoCommits($stateParams.repo_name);
          // }
        }
      })



  });
