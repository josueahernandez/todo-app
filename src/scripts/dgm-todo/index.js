  angular
    .module('dgmTodo', [
      'dgmTodo.auth'
    ])
    .factory('auth', [
      '$http',
      'dgmTodoHost',
      function($http, host) {
        var auth = {
          login: function(email, password)
        }
      }
    ]);
