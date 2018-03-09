(function(){
  angular
    .module('myApp')
    .controller('industriasControlador', industriasControlador);
    function industriasControlador(industriaServicio, $mdSidenav, $scope){
      //controlador
      var industriasCtrl = this;

      function init(){
        industriasCtrl.listaIndustrias = industriaServicio.getIndustrias();
      }init();

      industriasCtrl.toggleLeft = buildToggler('left');
      industriasCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };
      industriasCtrl.cerrarSesion = function (){
          $location.path('/landing');

        };
      industriasCtrl.save = function(){
        var numIndustrias = industriaServicio.getIndustrias();
        var nuevaIndustria ={
          tipo : industriasCtrl.tipo
        }

       industriaServicio.setIndustrias(nuevaIndustria);

        industriasCtrl.tipo = null;

      }

        industriasCtrl.delete = function(pValor) {

        var listaIndustriasGuardadas = industriaServicio.getIndustrias(),
            id = -1;

        for (var i = 0; i < listaIndustriasGuardadas.length; i++) {
          if (pValor == listaIndustriasGuardadas[i].tipo) {
            id = i;
          }
        }

          listaIndustriasGuardadas.splice(id, 1);

          localStorage.setItem('listaUsuariosNuevos', JSON.stringify(listaIndustriasGuardadas));
          init();

      }

      $scope.redirectPerfil = function () {
          $location.path("/administrador");
      }

}
})();
