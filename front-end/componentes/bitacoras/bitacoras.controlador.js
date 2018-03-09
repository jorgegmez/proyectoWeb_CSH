(function(){
  angular
    .module('myApp')
    .controller('bitacoraControlador', bitacoraControlador);
    function bitacoraControlador($scope,$mdSidenav, $location, bitaServicio){
      //controlador
      var bitaCtrl = this;

      function init(){

      }init();

      bitaCtrl.toggleLeft = buildToggler('left');
      bitaCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };

      $scope.redirectPerfil = function () {
          $location.path("/estudiantes");
      }

      function saveBitacora() {

          var nuevaBitacora = {
              'fecha': $scope.fecha,
              'horaInicio':[],
              'horaFinal':[],
              'descripcion':[]
          }

          bitaServicio.setBitacora(nuevaBitacora);

      };
      bitaCtrl.cerrarSesion = function (){
              $location.path('/landing');

            };

    }
})();
