(function(){
  angular
    .module('myApp')
    .controller('proyectosAsigEstControlador', proyectosAsigEstControlador);
    function proyectosAsigEstControlador(proyectosAsigEstServicio,proyectoServicio,$scope, $mdDialog, $mdSidenav, $location){
      //controlador
      var proyectAsigEstCtrl = this;

      function init(){
        proyectAsigEstCtrl.proyectAsignadosEstud = proyectoServicio.getProyecto();
      }init();
      proyectAsigEstCtrl.toggleLeft = buildToggler('left');
      proyectAsigEstCtrl.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      };


}})();
