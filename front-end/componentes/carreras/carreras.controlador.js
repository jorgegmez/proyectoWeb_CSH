(function(){
  angular
    .module('myApp')
    .controller('carreraControlador', carreraControlador);
    function carreraControlador(carreraServicio, $mdSidenav, $scope, $location){
      //controlador
      var carrerasCtrl = this;

      function init(){
        carrerasCtrl.listaCarreras = carreraServicio.getCarreras();
      }init();


      carrerasCtrl.toggleLeft = buildToggler('left');
      carrerasCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      $scope.redirectPerfil = function () {
        $location.path("/administrador");
      }

      carrerasCtrl.cerrarSesion = function (){
      $location.path('/landing');

    };

      carrerasCtrl.save = function(){
        var numCarreras = carreraServicio.getCarreras();
        var nuevaCarrera = {
          nombre : carrerasCtrl.nombre,
          codigo: carrerasCtrl.codigo,
          nivelAcademico: carrerasCtrl.nivelAcademico
        };

       carreraServicio.setCarreras(nuevaCarrera);

        carrerasCtrl.nombre = null;
        carrerasCtrl.codigo = null;
        carrerasCtrl.nivelAcademico = null;

      }

        carrerasCtrl.delete = function(pValor) {

        var listaCarrerasGuardadas = carreraServicio.getCarreras(),
            id = -1;

        for (var i = 0; i < listaCarrerasGuardadas.length; i++) {
          if (pValor == listaCarrerasGuardadas[i].nombre) {
            id = i;
          }
        }

          listaCarrerasGuardadas.splice(id, 1);

          localStorage.setItem('listaCarrerasNuevas', JSON.stringify(listaCarrerasGuardadas));
          init();

      }

   }

})();
