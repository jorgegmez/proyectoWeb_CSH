(function(){
  angular
    .module('myApp')
    .controller('adminControlador', adminControlador);
    function adminControlador(adminServicio, registroServicio, $mdSidenav, inicioServicio, $scope, $location){
      //controlador
      var adminCtrl = this;

      function init(){

      }init();

      adminCtrl.toggleLeft = buildToggler('left');
      adminCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      $scope.redirectPerfil = function () {
          $location.path("/administrador");
      }

    adminCtrl.cerrarSesion = function (){
        $location.path('/landing');

      };


    }
})();
