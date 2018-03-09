angular
 .module('myApp')
 .service('rastrearServicio', rastrearServicio);

 function rastrearServicio(){
   var codigos = [];


   var publicAPI = {
     getCodigos : _getCodigos
   };
   return publicAPI;

   function _getCodigos() {
     return codigos;
   }


}
