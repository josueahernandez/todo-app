
angular
.module('TodosController', [
  'dgmTodo.auth',
  'dgmTodo.todos',
])
.controller('TodosController', [
  'auth',
  '$location',
  'todos',
  function (auth, $location, todos) {
    'use strict';

    var self = this;


    auth.isLoggedIn().then(function (currentUser) {
      if (!currentUser) {
        $location.url('/login');
      } else {
        self.currentUser = currentUser;
        readTodos();
      }
    });

    function readTodos() {
      todos.read(self.currentUser.id)
        .then(function (todoItems) {
          self.todos = todoItems;
        });
    }

    function resetCreateForm() {
      self.create = {
        name: '',
        description: '',
        tags: '',
      };
    }
    resetCreateForm();

    self.createTodo = function (data) {

      var todo = {
        name: data.name,
        description: data.description || 'No Description',
        tags: (data.tags || '')
          .split(',')
          .map(function (tag) {
            return tag.trim();
          })
          .filter(function(tag) {
            return tag;
          })
      };

      todos.create(self.currentUser.id, todo)
        .then(function() {
          readTodos();
          resetCreateForm();
          console.log('success');
        })
        .catch(function(res) {
          console.log(res.data);
          // TODO error handle
        });
    };

    self.archiveTodo = function(todo) {
      todo.archive = true;
      self.updateTodo(todo);
    };

    self.updateTodo = function(todo) {
      var updateTodo = {
        complete: todocompleted,
      }
      todo.update(self.currentUser.id, todo.id, update.id)
      .then(function ();

    })
      .catch(function (err) {
        console.log(err);
      });
    };
]);
