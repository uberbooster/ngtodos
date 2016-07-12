

(function(){
  angular.module('ngtodos')
         .factory('TodoService', TodoServiceF);

  TodoServiceF.$inject = ['$http'];

  function TodoServiceF($http){
    var todos = [];
    var object = {
      create: createTodo,
      readAll: getAll,
      update: updateTodo,
      delete: deleteTodo,
      todos: todos
    };
    return object;

    function createTodo(){};
    function getAll(){
      return $http.get('https://quiet-refuge-27140.herokuapp.com/todos/')
                  .then(function(response){
                    object.todos = response.data;
                    console.log("object.todos: ",object.todos);
                  });
    };
    function updateTodo(){};
    function deleteTodo(){};
  };
})();
