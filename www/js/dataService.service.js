angular.module('myApp')

  .factory('dataService', function(Restangular, $http,$rootScope) {
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
      getUserData: function () {
        return $http.get('https://gitlab.com/api/v3/users/580404');
      },
      repositories: function (data) {
        return Restangular.one('gitlab').one('repositories').post('',data);
      },
      addRepo: function (data) {
        return Restangular.one('gitlab').one('repositories').one('add').post('',data);
      },
      removeRepo: function (data,rid) {
        console.log(data , rid);
        return Restangular.one('gitlab').one('repositories').one(rid).one('delete').post('',data);
      },
      getRepo: function (rid,data) {
        return Restangular.one('gitlab').one('repositories').one(rid).post('',data);
      },
      getCommits: function (rid,data) {
        return Restangular.one('gitlab').one('repositories').one(rid).one('commits').post('',data);
      },
      getMembers: function (rid, data) {
        return Restangular.one('gitlab').one('repositories').one(rid).one('members').post('',data);
      }
    };

    var github = {
      login: function (data) {
        return Restangular.one('github').one('login').post('', data);
      },
      repositories: function () {
        return Restangular.one('github').one('repositories').get();
      },
      getUserData: function () {
        return Restangular.one('github').one('me').get();
      },
      getRepo: function (repo_name) {
        return Restangular.one('github').one('repositories').one(repo_name).get();
      },
      addRepo: function (data) {
        return Restangular.one('github').one('repositories').post('', data);
      },
      getRepoContri: function (repo_name) {
        return Restangular.one('github').one('repositories').one(repo_name).one('contributors').get();
      },
      getRepoCommits: function (repo_name) {
        return Restangular.one('github').one('repositories').one(repo_name).one('commits').get();
      }
    };

    return {
      user: user,
      gitlab: gitlab,
      github: github
    }
  });
