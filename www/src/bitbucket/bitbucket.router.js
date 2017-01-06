angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('bitbucketLogin', {
        url: '/bitbucket-login',
        templateUrl: 'src/bitbucket/login/bitbucket-login.html',
        controller: 'BitBucketLoginCtrl'
      })

  });
