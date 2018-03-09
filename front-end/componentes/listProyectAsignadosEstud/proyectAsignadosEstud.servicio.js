angular
 .module('myApp')
 .service('proyectosAsigEstServicio', proyectosAsigEstServicio);

 function proyectosAsigEstServicio(){
   var proyectAsignadosEstud = [

       ];

   var publicAPI = {
     getDatosProyectAsigEst : _getDatosProyectAsigEst
   };
   return publicAPI;

   function _getDatosProyectAsigEst() {
     almacenarLocalStorage('ProyectAsigEstud', proyectAsignadosEstud);
     return proyectAsignadosEstud;
   }

   function almacenarLocalStorage(pNombreElemento, pElemento) {

       localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

   }
}
