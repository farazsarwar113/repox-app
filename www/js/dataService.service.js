angular.module('myApp')

  .factory('dataService', function(Restangular) {
    var user = {
      register: function (data) {
        return Restangular.one('users').one('register').post('', data);
      },
      login: function (data) {
        return Restangular.one('users').one('login').post('', data);
      },
      verifyMe: function () {
        return Restangular.one('users').one('me').get();
      }
    };
    var gitlab = {
      login: function (data) {
        return Restangular.one('gitlab').one('login').post('', data);
      },
      repositories: function (data) {
        return Restangular.one('gitlab').one('repositories').post(data);
      }
    };
  });
