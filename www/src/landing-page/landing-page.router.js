angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('landingPage', {
        url: '/landing-page',
        templateUrl: 'src/landing-page/landing-page.html',
        controller: 'landingPageCtrl'
      })
    $urlRouterProvider.otherwise('/landing-page');
  });
