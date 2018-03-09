(function(){
  angular
  .module('myApp')
  .service('formuServicio', formuServicio);

  function formuServicio(){

    var publicAPI = {
      
      getFormulario : _getFormulario,
      setFormulario : _setFormulario
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setFormulario(nombreLLave,pFormularios){
      var formularios= _getFormulario(nombreLLave);
          formularios.push(pFormularios);
          almacenarLocalStorage(nombreLLave, formularios);

          //$window.localStorage["listaTareas"] = JSON.stringify(value);
        }


    function _getFormulario(nombreLLave){
      var formuNuevo = JSON.parse(localStorage.getItem(nombreLLave));
      var listaNuevaForm;

      if(formuNuevo==null){
        listaNuevaForm = [];
      }else{
        listaNuevaForm = formuNuevo;
      }
      return listaNuevaForm;
    }


  function almacenarLocalStorage (pNombreElemento, pElemento){

    localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

  }


}

})();
