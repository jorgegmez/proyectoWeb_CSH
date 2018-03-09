(function(){
  angular
    .module('myApp')
    .controller('inicioControlador', inicioControlador);
    function inicioControlador(inicioServicio, $scope, $mdDialog, $location, formuServicio, industriaServicio, editarPerfiles, carreraServicio, ImageService, registroServicio, Upload){
      //controlador
      var inicioCtrl = this;
      var llaveFormEst = 'formuEst';
      var llaveFormCli = 'formCli',
          registroEstudiante = 'estudiantes',
          registroAsistente = 'asistente',
          registroProfesores = 'profesores',
          registroConcejo = 'concejo';

      inicioCtrl.cloudObj = ImageService.getConfiguration();
      function init(){
        $scope.listaUsuarios = inicioServicio.setAdministrador();
        $scope.formulariosEst = formuServicio.getFormulario(llaveFormEst);
        $scope.formulariosCli = formuServicio.getFormulario(llaveFormCli);
        $scope.industrias = industriaServicio.getIndustrias();
        $scope.carreras = carreraServicio.getCarreras();


        inicioCtrl.listaUsuarios = inicioServicio.getAdministrador();
        inicioCtrl.listaUsuariosActivos = inicioServicio.getUsuarios();

      }init();

      /* Todo lo de formularios  */
      $scope.saveformEst = function () {
          inicioCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
          Upload.upload(inicioCtrl.cloudObj)
            .success(function (data) {
                saveEst(data.url);
            });
          $mdDialog.hide();
          $scope.formulariosEst = formuServicio.getFormulario(llaveFormEst);
      }

      function saveEst(urlImagen) {

          var nuevoFormEst = {
              'cedula': $scope.cedula,
              'nombre': $scope.nombre,
              'carrera': $scope.carrera,
              'genero': $scope.genero,
              'email': $scope.email,
              'edad': $scope.edad,
              'cursos': $scope.cursos,
              'foto': urlImagen
              //'curriculum':$scope.curriculum,
              //'portofolio': $scope.portofolio,

          }

          formuServicio.setFormulario(llaveFormEst, nuevoFormEst);

      };

      $scope.saveCli = function () {
          var nuevoFormCli = {
              'cedulaC': $scope.cedulaC,
              'tipoCedulaC': $scope.tipoCedulaC,
              'nombreE': $scope.nombreE,
              'nombreP': $scope.nombreP,
              'nombreC': $scope.nombreC,
              'industria': $scope.tipoIndustria,
              'emailC': $scope.emailC,
              'telefonoC': $scope.telefonoC,
              'capitalC': $scope.capitalC,
              'profesoresA': [],
              'estudiantes': [],
              'estado': 'En Espera',
              'info': []
              //'resumenC':$scope.resumenC

          }
          formuServicio.setFormulario(llaveFormCli, nuevoFormCli);
          $mdDialog.hide();
      };

      $scope.traerIndustrias = function (tipoIndustria) {
          var industrias = industriaServicio.getIndustrias();
          $scope.industrias = industrias;
      }


      $scope.showDialogEstudiante = function (ev) {
          $mdDialog.show({
              controller: inicioControlador,
              templateUrl: 'componentes/formularios/popUpEstudiante.vista.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true
          });
      }

      $scope.showDialogCliente = function (ev) {
          $mdDialog.show({
              controller: inicioControlador,
              templateUrl: 'componentes/formularios/popUpCliente.vista.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose: true
          });
      }

      $scope.redirectProyectos = function () {
          $location.path("/proyectos");
      }


      /*Función para mostrar el pop up*/

      $scope.showAdvanced = function(ev) {
      $mdDialog.show({
        controller: inicioControlador,
        templateUrl: 'componentes/landing/inicioSesion.vista.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })
    };

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

  /*Función para mostrar el pop up*/
    /*Función que inicia sesión*/
    $scope.iniciarSesion = function(pCorreo, pContrasenna) {
      var admin = inicioServicio.getAdministrador(),
          listaUsuariosTotal = inicioServicio.getUsuarios(),
          id = -1,
          mensajeUsuarioInicio = document.querySelector('#mensajeInicio'),
          listaEncontrada = [],
          rol = '';


          console.log(admin);

          if (pCorreo == admin.correo && pContrasenna == admin.contrasenna){
              mensajeUsuarioInicio.value = 'Bienvenido '+ admin.nombre + ' ' + admin.rol;
              $location.path('/administrador');
          }else {
                for (var j = 0; j < listaUsuariosTotal.length; j++) {
                  if (pCorreo == listaUsuariosTotal[j].correo[j]) {
                    id = j;
                    listaEncontrada = listaUsuariosTotal;
                    console.log(listaUsuariosTotal[id].rol);
                  }
                }

                if (id == -1) {
                  mensajeUsuarioInicio.value = 'El usuario no está registrado en el sistema';
                  console.log('El usuario no está registrado en el sistema');
                }else {
                  if (id != -1) {
                    if (pCorreo == listaEncontrada[id].correo && pContrasenna == listaEncontrada[id].contrasenna) {
                      mensajeUsuarioInicio.value = 'Bienvenido '+ pCorreo + ' ' + listaEncontrada[id].rol;
                    }else {
                      mensajeUsuarioInicio.value = 'La contraseña es incorrecta, inténtelo de nuevo';
                      console.log('La contraseña es incorrecta, inténtelo de nuevo');
                    }
                  }
                }
            };



      };

  }
})();
