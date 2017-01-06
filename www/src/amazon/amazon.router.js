angular.module('myApp')

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('amazonLogin', {
        url: '/amazon-login',
        templateUrl: 'src/amazon/login/amazon-login.html',
        controller: 'AmazonLoginCtrl'
      })

  });
