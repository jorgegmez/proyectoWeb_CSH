(function(){
  angular
  .module('myApp')
  .service('carreraServicio', carreraServicio);

  function carreraServicio(){
    var listaCarreras = [      {
      nombre: "Desarrollo y Diseño Web",
      codigo: "DW1",
      nivelAcademico: "Técnico"
      },{
      nombre: "Desarrollo de Software",
      codigo: "DS1",
      nivelAcademico: "Diplomado"
      },{
      nombre: "Integración de Tecnologías",
      codigo: "IT2",
      nivelAcademico: "Bachillerato"
      }];

    var publicAppi = {
      getCarreras : _getCarreras,
      setCarreras : _setCarreras,
    }

    return publicAppi;

    function _setCarreras(pElemento){

      console.log(pElemento);
      listaCarreras.push(pElemento);

      almacenarLocalStorage(listaCarreras);


    }

    function _getCarreras(){
      var carreras = JSON.parse(localStorage.getItem("listaLocalCarreras")),
      lista = '' ;

      if(carreras == null){
        lista = listaCarreras;
      }else{
        lista = carreras;
      }

      return lista
    }


    function almacenarLocalStorage (plistaCarreras){

      localStorage.setItem("listaLocalCarreras", JSON.stringify(plistaCarreras));

    }
  }
})();
