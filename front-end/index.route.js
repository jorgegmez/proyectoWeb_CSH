(function(){
  angular
    .module('myApp')
    .config(configuration);

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('landing',{
          url: '/landing',
          templateUrl: 'componentes/landing/landing.vista.html',
          controller: 'inicioControlador',
          controllerAs: 'inicioCtrl'
        })

        .state('agregarUsuarios',{
          url: '/agregarUsuarios',
          templateUrl: 'componentes/registrarUsuario/agregar.vista.html',
          controller: 'registroControlador',
          controllerAs: 'registroCtrl'
        })

        .state('eliminarUsuarios',{
        url: '/eliminarUsuarios',
        templateUrl: 'componentes/eliminarUsuario/eliminar.vista.html',
        controller: 'eliminarControlador',
        controllerAs: 'eliminarCtrl'

      })

      .state('editarPerfil',{
        url: '/editarPerfil',
        templateUrl: 'componentes/editarPerfil/editarPerfil.vista.html',
        controller: 'editarControlador',
        controllerAs: 'editarCtrl'
      })

      .state('listaProfesores',{
        url: '/listaProfesores/:nombreP',
        templateUrl: 'componentes/listaProfesores/listarProfesores.vista.html',
        controller: 'listarProfControlador',
        controllerAs: 'listaProfCtrl'
      })

      .state('industrias',{
        url: '/industrias',
        templateUrl: 'componentes/industrias/industrias.vista.html',
        controller: 'industriasControlador',
        controllerAs: 'industriasCtrl'
      })
      .state('carreras',{
        url: '/carreras',
        templateUrl: 'componentes/carreras/carreras.vista.html',
        controller: 'carreraControlador',
        controllerAs: 'carrerasCtrl'
      })
      .state('administrador',{
        url: '/administrador',
        templateUrl: 'componentes/administrador/administrador.vista.html',
        controller: 'adminControlador',
        controllerAs: 'adminCtrl'
      })
      .state('proyectos',{
        url: '/proyectos',
        templateUrl: 'componentes/proyectos/proyectos.vista.html',
        controller: 'proyectoControlador',
        controllerAs: 'proyectoCtrl'
      })

      .state('infoProyecto',{
        url: '/infoProyecto/:nombreP',
        templateUrl: 'componentes/proyectos/infoProyecto.vista.html',
        controller: 'unProyectoControlador',
        controllerAs: 'unProyectoCtrl'
      })

      .state('solicitudesPortulantes',{
        url: '/solicitudesPortulantes',
        templateUrl: 'componentes/solicitudes/solicitudes.vista.html',
        controller: 'solicitudesControlador',
        controllerAs: 'solicitudesCtrl'
      })

      .state('bitacora',{
        url: '/bitacora',
        templateUrl: 'componentes/bitacoras/bitacoras.vista.html',
        controller: 'bitacoraControlador',
        controllerAs: 'bitaCtrl'
      })

      .state('listarUsuarios',{
        url: '/listarUsuarios',
        templateUrl: 'componentes/listarUsuarios/listarUsuarios.vista.html',
        controller: 'listarUsuariosControlador',
        controllerAs: 'listarUCtrl'
      })

      .state('usuarioEstudiante',{
        url: '/usuarioEstudiante',
        templateUrl: 'componentes/estudiantes/estudiantes.vista.html',
        controller: 'estudiantesControlador',
        controllerAs: 'estudiantesCtrl'
      })

      .state('proyectosAsignados',{
        url: '/proyectosAsignados',
        templateUrl: 'componentes/listProyectAsignadosEstud/proyectAsignadosEstud.vista.html',
        controller: 'proyectosAsigEstControlador',
        controllerAs: 'proyectAsigEstCtrl'
      })

        $urlRouterProvider.otherwise('/landing');
    }

})();
