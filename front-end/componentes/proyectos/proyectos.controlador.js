(function(){
  angular
    .module('myApp')
    .controller('proyectoControlador', proyectoControlador);
    function proyectoControlador($scope,$state,$mdDialog,$location,proyectoServicio,ImageService,Upload,$mdSidenav){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var proyectoCtrl = this;

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        $scope.proyectos = proyectoServicio.getProyecto();
      }
      init();
      proyectoCtrl.toggleLeft = buildToggler('left');
      proyectoCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };
      $scope.traerProyectos = function(){
        var proyectos = proyectoServicio.getProyecto();
        $scope.proyectos = proyectos;
      }

      $scope.eliminarProyecto = function(nombreProyecto){
          proyectoServicio.borrarProyecto(nombreProyecto);
          $scope.proyectos = proyectoServicio.getProyecto();
      };


      $scope.navegarProyecto = function(nombreProyecto){
        $state.go('infoProyecto',{nombreP:nombreProyecto});
      }
      $scope.redirectPerfil = function () {
          $location.path("/administrador");
      }
      proyectoCtrl.cerrarSesion = function (){
            $location.path('/landing');

          };
    }


     //se establece un objeto de angular snormal

})();
