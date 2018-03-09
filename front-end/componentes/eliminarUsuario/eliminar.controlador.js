(function(){
  angular
    .module('myApp')
    .controller('eliminarControlador', eliminarControlador);
    function eliminarControlador(eliminarServicio, $mdSidenav, registroServicio, inicioServicio, $location, $scope){
      //controlador
      var eliminarCtrl = this,
          registroEstudiante = 'estudiantes',
          registroAsistente = 'asistente',
          registroProfesores = 'profesores',
          registroConcejo = 'concejo';

      function init(){
        eliminarCtrl.listaUsuarios = registroServicio.getUsuarios();
      }init();

      eliminarCtrl.toggleLeft = buildToggler('left');
      eliminarCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      eliminarCtrl.cerrarSesion = function (){
        $location.path('/landing');

      };

      $scope.redirectUsuarios = function () {
          $location.path("/agregarUsuarios");
      }

      /*eliminarCtrl.desplegar = function (pNombreLista){

        switch (pNombreLista) {
          case 'asistente':
            eliminarCtrl.listaUsuarios = registroServicio.getUsuarios('asistente');
            break;
          case 'profesores':
            eliminarCtrl.listaUsuarios = registroServicio.getUsuarios('profesores');
            break;
          case 'estudiantes':
            eliminarCtrl.listaUsuarios = registroServicio.getUsuarios('estudiantes');
            break;
          case 'concejo':
            eliminarCtrl.listaUsuarios = registroServicio.getUsuarios('concejo');
            break;
          default:
          eliminarCtrl.listaUsuarios = registroServicio.getUsuarios(pNombreLista);
        }
      };*/

      eliminarCtrl.remove = function (pCedula, pLista){
        var lista = registroServicio.getUsuarios(),
            id = -1,
            mensajeUsuario = document.querySelector('#mensajeUsuario');

        for (var i = 0; i < lista.length; i++) {
          if (pCedula == lista[i].cedula) {
            id = i;
          }
        }

          console.log(id);
          lista.splice(id, 1);
          eliminarServicio.setNuevosUsuarios(lista);
          mensajeUsuario.value = 'Se ha eliminado el usuario correctamente';
          console.log(pCedula);
          init();
      };

    };
})();
