angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('gitlabLogin', {
        url: '/gitlab-login',
        templateUrl: 'src/gitlab/login/gitlab-login.html',
        controller: 'GitLabLoginCtrl'
      })

  });
