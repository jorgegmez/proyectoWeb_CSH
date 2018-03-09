(function(){
  angular
    .module('myApp')
    .controller('editarControlador', editarControlador);
    function editarControlador(editarPerfiles, eliminarServicio, $mdSidenav, registroServicio, $scope, inicioServicio){
      //controlador
      var editarCtrl = this;
      function init(){
        inicioServicio.setAdministrador();
        editarCtrl.listaAministrador = inicioServicio.getAdministrador();
      }init();

      editarCtrl.toggleLeft = buildToggler('left');
      editarCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      editarCtrl.setDatos = function() {
        var datosPerfil = inicioServicio.getAdministrador();

        console.log(datosPerfil);
        editarCtrl.nombreUsuario = datosPerfil.nombre;
        editarCtrl.apellidosUsuario = datosPerfil.apellidos;
        editarCtrl.carreraUsuario = datosPerfil.carrera;
        editarCtrl.cedulaUsuario = datosPerfil.cedula;
        editarCtrl.correoUsuario = datosPerfil.correo;
        editarCtrl.contrasennaUsuario = datosPerfil.contrasenna;
      };

      editarCtrl.modificarDatos = function() {
        var datos = inicioServicio.getAdministrador(),
            id = -1,
            mensajeUsuario = document.querySelector('#mensajeUsuario');

          datos.nombre = editarCtrl.nombreUsuario;
          datos.apellidos = editarCtrl.apellidosUsuario;
          datos.carrera = editarCtrl.carreraUsuario;
          datos.cedula = editarCtrl.cedulaUsuario;
          datos.correo = editarCtrl.correoUsuario;
          datos.contrasenna = editarCtrl.contrasennaUsuario;

          editarPerfiles.guardarDatos('administrador', datos)
          mensajeUsuario.value = 'Se han guardado con éxito los cambios';
          console.log(datos[id]);

      };



      $scope.redirectPerfil = function () {
          $location.path("/administrador");
      }

    };

})();
