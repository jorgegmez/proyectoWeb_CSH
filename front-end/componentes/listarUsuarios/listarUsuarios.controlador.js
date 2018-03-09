 (function(){
  angular
    .module('myApp')
    .controller('listarUsuariosControlador', listarUsuariosControlador);
    function listarUsuariosControlador(listarUsuariosServicio, $mdSidenav, $location, $mdDialog, $stateParams, $scope,registroServicio){
      //controlador
      var listarUCtrl = this;
      var registroEstudiante = 'estudiante',
          registroAsistente = 'asistente',
          registroProfesores = 'profesor',
          registroConcejo = 'concejo';

      function init(){
        listarUCtrl.listaUsuarios = listarUsuariosServicio.getUsuarios();
      }init();


              listarUCtrl.toggleLeft = buildToggler('left');
              listarUCtrl.toggleRight = buildToggler('right');

              function buildToggler(componentId) {
                return function() {
                  $mdSidenav(componentId).toggle();
                };
              };

              $scope.redirectUsuarios = function () {
                  $location.path("/agregarUsuarios");
              }

              $scope.redirectPerfil = function () {
                  $location.path("/administrador");
              }

              listarUCtrl.cerrarSesion = function (){
                $location.path('/landing');

              };


      }
})();
