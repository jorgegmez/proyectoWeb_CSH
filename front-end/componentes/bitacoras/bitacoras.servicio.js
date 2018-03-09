(function(){
  angular
  .module('myApp')
  .service('bitaServicio', bitaServicio);

  function bitaServicio(){
 

    var publicAppi = {
      setBitacora : _setBitacora,
      getBitacora : _getBitacora
    };

    function _setBitacora(eBitacora){
      var bitacora= _getBitacora();
          bitacora.push(eBitacora);
          almacenarLocalStorage(bitacora);

          //$window.localStorage["listaTareas"] = JSON.stringify(value);
        }


    function _getBitacora(){
      var nuevaBitacora = JSON.parse(localStorage.getItem());
      var listaNuevaBitacora;

      if(nuevaBitacora==null){
        listaNuevaBitacora = [];
      }else{
        listaNuevaBitacora = nuevaBitacora;
      }
      return listaNuevaBitacora;
    }


    function almacenarLocalStorage (pNombreElemento, pElemento){

    localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }

  }
})();
