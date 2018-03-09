angular
 .module('myApp')
 .service('solicitudesServicio', solicitudesServicio);

 function solicitudesServicio($http){
   var soliEstudiantes = [];

   var publicAPI = {
     cambiarEstadoEstudiante: _cambiarEstadoEstudiante,
     getSolicitud: _getSolicitud
   };
   return publicAPI;

   function _getSolicitud() {

       return $http.get('http://localhost:8000/api/solicitudest');
   }

   function _cambiarEstadoEstudiante(cedula,estadoInicial) {

       var listaEstudiantes = _getSolicitud();
       var indice = listaEstudiantes.map(function (estudiante) { return estudiante['cedula']; }).indexOf(cedula);
       alert(indice);
       listaEstudiantes[indice].estado1 = estadoInicial;
       almacenarLocalStorage("formuEst", listaEstudiantes);
   }
   function almacenarLocalStorage(pNombreElemento, pElemento) {

       localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

   }
}
