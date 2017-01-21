angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        url: '/home',
        templateUrl: 'src/home/home.html',
        controller: 'HomeCtrl'
      })
  });
