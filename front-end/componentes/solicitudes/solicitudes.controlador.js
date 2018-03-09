(function(){
  angular
    .module('myApp')
    .controller('solicitudesControlador', solicitudesControlador);
    function solicitudesControlador(solicitudesServicio,formuServicio,$scope, $mdDialog, $mdSidenav, $location){
      //controlador
      var solicitudesCtrl = this;
      var llaveFormEst= 'formuEst';

      function init(){

        solicitudesServicio.getSolicitud()
          .success(function(data) {
            solicitudesCtrl.soliEstudiantes = data;
          });
      }init();
      //Funcionalidad del sidenav
      solicitudesCtrl.toggleLeft = buildToggler('left');
      solicitudesCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      //Funcionalidad del estado estudiante.
      $scope.procesarEstado1Estudiante = function (cedula, estadoEstudiante) {
          solicitudesServicio.cambiarEstadoEstudiante(cedula, estadoEstudiante);
          solicitudesCtrl.soliEstudiantes = solicitudesServicio.solicitudesServicio();
      }

      //Bonton que redirecciona a el form de crear usuario
      $scope.redirectUsuarios = function () {
          $location.path("/agregarUsuarios");
      }

      //Funcion de cerrar cesion. **Moficar despues**
      solicitudesCtrl.cerrarSesion = function (){
            $location.path('/landing');

          };

      //Arreglar esta funcionalidad despues
      $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Lo sentimos! :(')
        .textContent('Aún no contamos con la funcionalidad de almacenar este dato.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Entiendo!')
        .targetEvent(ev)
    );
  };

}})();
