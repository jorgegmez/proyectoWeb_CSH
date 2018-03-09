(function(){
  angular
    .module('myApp')
    .controller('estudiantesControlador', estudiantesControlador);
    function estudiantesControlador(estudiantesServicio, adminServicio, registroServicio, $mdSidenav, inicioServicio, $scope, $location){
      //controlador
      var estudiantesCtrl = this;

      function init(){

      }init();

      estudiantesCtrl.toggleLeft = buildToggler('left');
      estudiantesCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      $scope.redirectPerfil = function () {
          $location.path("/estudiantes");
      }
      estudiantesCtrl.cerrarSesion = function (){
          $location.path('/landing');

        };

    }
})();
