(function(){
  angular
    .module('myApp')
    .controller('rastrearControlador', rastrearControlador);
    function rastrearControlador($scope,rastrearServicio,$mdDialog,proyectoServicio){
      //controlador
      var codigosCtrl = this;
      var llaveFormEst= 'formuEst';//Se necesita para poder entrar en el contenido del form

      function init(){
        codigosCtrl.codigos = proyectoServicio.getProyecto();
      }init();
      /*Función para mostrar el pop up*/
      /*$scope.mostrarEstado = function(ev, codigoIngresado) {
      $mdDialog.show({
        controller: rastrearControlador,
        templateUrl: 'componentes/landing/popUpRastrear.vista.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
      })*/

      $scope.mostrarEstado = function(ev, codigoIngresado) {
   // Appending dialog to document.body to cover sidenav in docs app
   // Modal dialogs should fully cover application
   // to prevent interaction outside of dialog
   //Buscar solicitud
   var listaProyectos = proyectoServicio.getProyecto(),
       sMj = '',
       sEstado = '',
       sAvance = '',
       bCodigoEncontrado = false;

       for (var i = 0; i < listaProyectos.length; i++) {
         if (codigoIngresado == listaProyectos[i].emailC) {
           bCodigoEncontrado = listaProyectos[i].emailC;
           sEstado = listaProyectos[i].estado;
           sMj = sEstado;
         }else {
           sMj = 'No se encontró la solicitud';
         }
       }
       console.log(sMj);

         $mdDialog.show(
           $mdDialog.alert()
             .parent(angular.element(document.querySelector('#popupContainer')))
             .clickOutsideToClose(true)
             .title('Estado de la solicitud')
             .textContent('Estado: ' + ' ' + sMj)
             .ariaLabel('Rastrear solicitud.')
             .ok('Entendido!')
             .targetEvent(ev, codigoIngresado)
         );
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
}})();
