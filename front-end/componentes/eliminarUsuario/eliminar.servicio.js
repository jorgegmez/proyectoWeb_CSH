(function(){
  angular
  .module('myApp')
  .service('eliminarServicio', eliminarServicio);

  function eliminarServicio(){
    var listaUsuarios = [],
        listaPorUsuarios = [];

    var publicAppi = {
      getUsuarios : _getUsuarios,
      setUsuarios : _setUsuarios,
      setNuevosUsuarios : _setNuevosUsuarios,
      getAsistente : _getAsistente,
      getProfesor : _getProfesor,
      getEstudiante : _getEstudiante,
      getConcejo : _getConcejo
    }

    return publicAppi;

    function _setNuevosUsuarios (pLista){
      almacenarLocalStorage(pLista);
    };

    function _setUsuarios(pNombreList, pElemento){
      var listaGuardada = _getUsuarios(pNombreList);

      listaGuardada.push(pElemento);

      almacenarLocalStorage(pNombreList, listaGuardada);


    }

    function _getUsuarios(pNombreLista){
    var usuarios = JSON.parse(localStorage.getItem(pNombreLista)),
      lista = '' ;

      if(usuarios==null){
        lista = listaUsuarios;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function _getAsistente(pNombreLista){
    var usuarios = JSON.parse(localStorage.getItem(pNombreLista)),
      lista = '' ;

      if(usuarios==null){
        lista = listaAsistente;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function _getProfesor(pNombreLista){
    var usuarios = JSON.parse(localStorage.getItem(pNombreLista)),
      lista = '' ;

      if(usuarios==null){
        lista = listaProfesores;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function _getEstudiante(pNombreLista){
    var usuarios = JSON.parse(localStorage.getItem(pNombreLista)),
      lista = '' ;

      if(usuarios==null){
        lista = listaEstudiantes;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function _getConcejo(pNombreLista){
    var usuarios = JSON.parse(localStorage.getItem(pNombreLista)),
      lista = '' ;

      if(usuarios==null){
        lista = listaConcejo;
      }else{
        lista = usuarios;
      }

      return lista;
    }


    function almacenarLocalStorage (pElemento){

      localStorage.setItem('listaUsuariosRegistrados', JSON.stringify(pElemento));

    }
  }
})();
