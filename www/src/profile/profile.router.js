angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('profile', {
        url: '/profile',
        templateUrl: 'src/profile/profile.html',
        controller: 'ProfileCtrl'
      })

  });
