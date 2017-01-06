angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('githubLogin', {
        url: '/github-login',
        templateUrl: 'src/github/login/github-login.html',
        controller: 'GitHubLoginCtrl'
      })

  });
