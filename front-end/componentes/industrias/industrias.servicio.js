(function(){
  angular
  .module('myApp')
  .service('industriaServicio', industriaServicio);

  function industriaServicio(){
    var listaIndustrias = [
      {
      "tipo": "Salud",
      "codigo": "TI1"
      },{
      "tipo": "Textil",
      "codigo": "TI2"
      },{
      "tipo": "Educación",
      "codigo": "TI3"
      },{
      "tipo": "Electrónica",
      "codigo": "TI4"
      }
    ];

    var publicAppi = {
      getIndustrias : _getIndustrias,
      setIndustrias : _setIndustrias,
    }

    return publicAppi;

    function _setIndustrias(pElemento){
      var listaGuardada = _getIndustrias();
      console.log(pElemento);
      listaIndustrias.push(pElemento);

      almacenarLocalStorage('listaUsuariosNuevos', listaGuardada);


    }

    function _getIndustrias(){
      var industrias = JSON.parse(localStorage.getItem("listaIndustriasNuevas")),
      lista = '' ;

      if(industrias==null){
        lista = listaIndustrias;
      }else{
        lista = industrias;
      }

      return lista
    }


    function almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }
})();
