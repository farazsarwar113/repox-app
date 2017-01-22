// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('myApp', ['ionic','restangular','ngStorage'])
  //.constant('SERVER_PATH',"http://localhost:3000")
  .constant('SERVER_PATH',"https://repox.mybluemix.net")
  .run(function($ionicPlatform,Restangular, $localStorage, dataService,$rootScope) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });

    Restangular.setDefaultHeaders({'x-access-token': $localStorage.token});
    dataService.user.verifyMe().then(function(res){
      console.log(res.data);
      $localStorage.token = res.data.token;
      $rootScope.user = res.data.user;
      Restangular.setDefaultHeaders({'x-access-token': res.data.token});
    });

  })

  .config(function (RestangularProvider, SERVER_PATH) {
    RestangularProvider.setBaseUrl(SERVER_PATH+'/api');
  })
