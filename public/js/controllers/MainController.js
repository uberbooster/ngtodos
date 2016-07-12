(function(){
  angular.module('ngtodos') //getter or the lookup
         .controller('MainController', MainControllerF);

  MainControllerF.$inject = ['$scope', 'TodoService'];

  function MainControllerF($scope, TodoServiceF){
    $scope.message = 'Hey now!  What is that sound?';
    console.log("TodoService: ", TodoServiceF);
    var todosC;
    TodoServiceF.readAll()
                .then(function(){
                  todosC = TodoServiceF.todos;
                  console.log("todosC: ", todosC);
                });

  };
})();
