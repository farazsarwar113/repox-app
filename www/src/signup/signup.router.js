angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('signup', {
        url: '/signup',
        templateUrl: 'src/signup/signup.html',
        controller: 'signUpCtrl'
      })

  });
