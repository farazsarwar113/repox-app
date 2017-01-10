angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('all-repo', {
        url: '/all-repo',
        templateUrl: 'src/all-repo/all-repo.html',
        controller: 'AllRepoCtrl'
      })

  });
