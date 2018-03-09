(function(){
  angular
    .module('myApp')
    .controller('listarProfControlador', listarProfControlador);
    function listarProfControlador(listarProfServicio, registroServicio, $scope, $stateParams, $mdSidenav, inicioServicio, $location, proyectoServicio, formuServicio){
      //controlador
      var listaProfCtrl = this;
      var llaveFormCli = 'formCli';

      function init(){

        buscarProyecto();
      }init();

      listaProfCtrl.toggleLeft = buildToggler('left');
      listaProfCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      function buscarProyecto() {
          var nombreProyecto = $stateParams.nombreP;
          var proyecto = proyectoServicio.buscarProyecto(nombreProyecto);
          $scope.proyecto = proyecto;
      }

      $scope.redirectInfoProyecto = function (nombreP) {
          $location.path("/infoProyecto/"+nombreP);
      }

      $scope.redirectPerfil = function () {
          $location.path("/administrador");
      }

      listaProfCtrl.cerrarSesion = function (){
        $location.path('/landing');
    }

    $scope.eliminarEstProyecto = function(nombreProyecto,cedula){
        proyectoServicio.eliminarEstProyecto(nombreProyecto,cedula);
        buscarProyecto();
    };

    $scope.eliminarProfProyecto = function(nombreProyecto,cedula){
      proyectoServicio.eliminarProfProyecto(nombreProyecto,cedula);
      buscarProyecto();
    };

    }
})();
