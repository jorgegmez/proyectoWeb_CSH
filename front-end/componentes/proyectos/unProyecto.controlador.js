(function () {
    angular
      .module('myApp')
      .controller('unProyectoControlador', unProyectoControlador);
    function unProyectoControlador($scope, $stateParams, $mdDialog, $mdSidenav, $location, proyectoServicio, registroServicio, ImageService,registroServicio ,Upload) {
        //controlador
        registroProfesores = 'profesor';
        registroEstudiante = 'estudiante';
        var unProyectoCtrl = this;

        function init() {
            buscarProyecto();
            $scope.profesores = filtrarPorRol('profesor',registroServicio.getUsuarios());
            $scope.estudiantes=
            filtrarPorRol('estudiante',registroServicio.getUsuarios());
            $scope.opcionesAvance = ["Iniciando", "En curso", "Finalizado"];
        }
        init();

        unProyectoCtrl.toggleLeft = buildToggler('left');
        unProyectoCtrl.toggleRight = buildToggler('right');

        function filtrarPorRol(nombreRol,lista){
          var listaFiltrada = [];
          for (var i = 0; i < lista.length; i++) {
            if (lista[i].rol == nombreRol) {
              listaFiltrada.push(lista[i]);
            }
          }
          return listaFiltrada;
        }

        function buildToggler(componentId) {
          return function() {
            $mdSidenav(componentId).toggle();
          };
        };

        $scope.redirectPerfil = function () {
            $location.path("/administrador");
        }

        unProyectoCtrl.cerrarSesion = function (){
          $location.path('/landing');

        };

        function buscarProyecto() {
            var nombreProyecto = $stateParams.nombreP;
            var proyecto = proyectoServicio.buscarProyecto(nombreProyecto);
            $scope.proyecto = proyecto;
        }

        $scope.showDialogAsignarP = function (ev) {
            $mdDialog.show({
                controller: unProyectoControlador,
                templateUrl: 'componentes/proyectos/popUpAsignarP.vista.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            });
        }

        $scope.showDialogAsignarEst = function(ev) {
           $mdDialog.show({
             controller: unProyectoControlador,
             templateUrl: 'componentes/proyectos/popUpAsignarEst.vista.html',
             parent: angular.element(document.body),
             targetEvent: ev,
             clickOutsideToClose:true
           });
         }

         $scope.showDialogIniciarP = function(ev) {
            $mdDialog.show({
              controller: unProyectoControlador,
              templateUrl: 'componentes/proyectos/iniciarProyecto.vista.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true
            });
          }

        $scope.saveProfeAsignado = function () {
            var nombreProyecto = $stateParams.nombreP;
            var cedulaProfesor = $scope.profesorSeleccionado;
            var profesor = registroServicio.getUnProfesor(cedulaProfesor);
            proyectoServicio.asignarProfesor(nombreProyecto, profesor);
            $mdDialog.hide();
        };

        $scope.saveEstdAsignado = function(){
         var nombreProyecto = $stateParams.nombreP;
         var cedulaEstudiante = $scope.estudianteSeleccionado;
         var estudiante = registroServicio.getUnEstudiante(cedulaEstudiante);
         proyectoServicio.asignarEstudiante(nombreProyecto, estudiante);
         $mdDialog.hide();
        };




        $scope.redirectProyectos = function () {
            $location.path("/proyectos");
        }

        $scope.redirectAsignados = function (nombreP) {
                  $location.path("/listaProfesores/"+nombreP);
              }


        $scope.procesarEstadoProyecto = function (estadoProyecto) {
            var nombreProyecto = $stateParams.nombreP;
            proyectoServicio.cambiarEstadoProyecto(nombreProyecto, estadoProyecto);
            $location.path("/proyectos");
        }

        $scope.guardarAvance = function () {
            var nombreProyecto = $stateParams.nombreP;
            var fechaInicio = $scope.fechaI;
            var fechaFinal = $scope.fechaF;
            var avance = $scope.avanceP;
            alert(avance);
            proyectoServicio.agregarAvance(nombreProyecto, fechaInicio,fechaFinal,avance);
          buscarProyecto();
        }


        $scope.agregarInfo = function () {
            alert("entro");
            var nombreProyecto = $stateParams.nombreP;
            var info = $scope.info;
            proyectoServicio.agregarInfo(nombreProyecto, info);
            buscarProyecto();
        }



    }

    //se establece un objeto de angular snormal

})();
