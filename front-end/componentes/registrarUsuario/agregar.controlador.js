(function(){
  angular
    .module('myApp')
    .controller('registroControlador', registroControlador);
    function registroControlador(registroServicio, $mdSidenav, inicioServicio, $location, carreraServicio, $scope){
      //controlador
      var registroCtrl = this,
          registroEstudiante = 'estudiante',
          registroAsistente = 'asistente',
          registroProfesores = 'profesor',
          registroConcejo = 'concejo';

      function init(){
        registroCtrl.listaUsuarios = registroServicio.getUsuarios();
        registroCtrl.carrera = carreraServicio.getCarreras();
      }init();

      registroCtrl.toggleLeft = buildToggler('left');
      registroCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      registroCtrl.cerrarSesion = function (){
        $location.path('/landing');

      };

      $scope.redirectListaU = function (){
        $location.path('/listarUsuarios');

      };

      $scope.redirectEliminarU = function () {
        $location.path("/eliminarUsuarios");
      }

      registroCtrl.registrarProfesor = function(pCorreoUsuario){
        var listaUsuarios = registroServicio.getUsuarios(),
            id = -1,
            mensajeError = document.querySelector('#mensajeError2');


        for (var i = 0; i < listaUsuarios.length; i++) {
          if (pCorreoUsuario == listaUsuarios[i].correo) {
            id = i;
          }else {
            id = -1;
          }
        }

        if (id != -1) {
          mensajeError.value = 'Ya existe un usuario registrado con este correo';
          console.log('Ya existe un usuario registrado con este correo');
        }else {
          if (id == -1) {
            var nuevoProfesor ={
              nombre : registroCtrl.nombreProfesor,
              apellidos : registroCtrl.apellidosProfesor,
              cedula : registroCtrl.cedulaProfesor,
              puesto : registroCtrl.puestoProfesor,
              profesion : registroCtrl.profesionProfesor,
              grado : registroCtrl.gradoProfesor,
              correo : registroCtrl.correoProfesor,
              contrasenna : registroCtrl.contrasennaProfesor,
              rol : registroProfesores
            };

            registroServicio.setUsuarios(nuevoProfesor);
            mensajeError.value = 'Se ha registrado al usuario satisfactoriamente';
            console.log('Se ha registrado al usuario satisfactoriamente');
          }
        }



        registroCtrl.nombreProfesor = '';
        registroCtrl.apellidosProfesor = '';
        registroCtrl.apellidosProfesor = '';
        registroCtrl.cedulaProfesor = '';
        registroCtrl.puestoProfesor = '';
        registroCtrl.profesionProfesor = '';
        registroCtrl.gradoProfesor = '';
        registroCtrl.correoProfesor = '';
        registroCtrl.contrasennaProfesor = '';


      };

      registroCtrl.registrarAsistente = function(pCedulaAsistente){
        var listaUsuarios = registroServicio.getUsuarios(),
            id = -1,
            mensajeError = document.querySelector('#mensajeError');


        for (var i = 0; i < listaUsuarios.length; i++) {
          if (pCedulaAsistente == listaUsuarios[i].cedula) {
            id = i;
          }else {
            id = -1;
          }
        }

        if (id != -1) {
          mensajeError.value = 'Ya existe un usuario registrado con este correo';
          console.log('Ya existe un usuario registrado con este correo');
        }else {
          if (id == -1) {
            var nuevoAsistente ={
              nombre : registroCtrl.nombreAsistente,
              carrera : registroCtrl.carreraAsistente,
              cedula : registroCtrl.cedulaAsistente,
              correo : registroCtrl.correoAsistente,
              contrasenna : registroCtrl.contrasennaAsistente,
              rol : registroAsistente
              };

            registroServicio.setUsuarios(nuevoAsistente);
            mensajeError.value = 'Se ha registrado al usuario satisfactoriamente';
            console.log('Se ha registrado al usuario satisfactoriamente');
          }
        }



        registroCtrl.nombreAsistente = null;
        registroCtrl.carreraAsistente = null;
        registroCtrl.cedulaAsistente = null;
        registroCtrl.correoAsistente = null;
        registroCtrl.contrasennaAsistente = null;

      };

      registroCtrl.registrarEstudiante = function(pCedulaEstudiante){
        var listaUsuarios = registroServicio.getUsuarios(),
            id = -1,
            mensajeError = document.querySelector('#mensajeError3');


        for (var i = 0; i < listaUsuarios.length; i++) {
          if (pCedulaEstudiante == listaUsuarios[i].cedula) {
            id = i;
          }else {
            id = -1;
          }
        }

        if (id != -1) {
          mensajeError.value = 'Ya existe un usuario registrado con este correo';
          console.log('Ya existe un usuario registrado con este correo');
        }else {
          if (id == -1) {
            var nuevoEstudiante ={
              nombre : registroCtrl.nombreEstudiante,
              apellidos : registroCtrl.apellidosEstudiante,
              carrera : registroCtrl.carreraEstudiante,
              cedula : registroCtrl.cedulaEstudiante,
              correo : registroCtrl.correoEstudiante,
              contrasenna : registroCtrl.contrasennaEstudiante,
              rol : registroEstudiante
              };

            registroServicio.setUsuarios(nuevoEstudiante);
            mensajeError.value = 'Se ha registrado al usuario satisfactoriamente';
            console.log('Se ha registrado al usuario satisfactoriamente');
          }
        }


        registroCtrl.nombreEstudiante = null;
        registroCtrl.apellidosEstudiante = null;
        registroCtrl.carreraEstudiante = null;
        registroCtrl.cedulaEstudiante = null;
        registroCtrl.correoEstudiante = null;
        registroCtrl.contrasennaEstudiante = null;



      };

      registroCtrl.registrarConsejo = function(pCedulaConsejo){
        var listaUsuarios = registroServicio.getUsuarios(registroConcejo),
            id = -1,
            mensajeError = document.querySelector('#mensajeError4');


        for (var i = 0; i < listaUsuarios.length; i++) {
          if (pCedulaConsejo == listaUsuarios[i].cedula) {
            id = i;
          }else {
            id = -1;
          }
        }

        if (id != -1) {
          mensajeError.value = 'Ya existe un usuario registrado con este correo';
          console.log('Ya existe un usuario registrado con este correo');
        }else {
          if (id == -1) {
            var nuevoProfesorConcejo ={
              nombre : registroCtrl.nombreConsejo,
              cedula : registroCtrl.cedulaConsejo,
              puesto : registroCtrl.puestoConsejo,
              profesion : registroCtrl.profesionConsejo,
              grado : registroCtrl.gradoConsejo,
              correo : registroCtrl.correoConsejo,
              contrasenna : registroCtrl.contrasennaConsejo,
              rol : registroConcejo
            };

            registroServicio.setUsuarios(nuevoProfesorConcejo);
            mensajeError.value = 'Se ha registrado al usuario satisfactoriamente';
            console.log('Se ha registrado al usuario satisfactoriamente');
          }
        }

        registroCtrl.nombreConsejo = null;
        registroCtrl.cedulaConsejo = null;
        registroCtrl.puestoConsejo = null;
        registroCtrl.profesionConsejo = null;
        registroCtrl.gradoConsejo = null;
        registroCtrl.correoConsejo = null;
        registroCtrl.contrasennaConsejo = null;

      };


    }
})();
