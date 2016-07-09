(function(){
  angular.module('ngtodos') //getter or the lookup
         .controller('MainController', MainControllerF);

  MainControllerF.$inject = [];

  function MainControllerF(){
    console.log("Main!");
  }
})();
