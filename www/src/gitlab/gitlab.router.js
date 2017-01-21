angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('gitlabLogin', {
        url: '/gitlab-login',
        templateUrl: 'src/gitlab/login/gitlab-login.html',
        controller: 'GitLabLoginCtrl'
      })
      .state('gitlabProfile', {
        url: '/gitlab-profile',
        templateUrl: 'src/gitlab/profile/gitlab-profile.html',
        controller: 'GitLabProfileCtrl',
        resolve: {
          r_Gprofile: function (dataService) {
            return dataService.gitlab.getUserData();
          }
        }
      })
  });
