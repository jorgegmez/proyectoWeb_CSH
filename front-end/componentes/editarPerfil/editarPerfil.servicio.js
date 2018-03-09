(function(){
  angular
  .module('myApp')
  .service('editarPerfiles', editarPerfiles);

  function editarPerfiles(){
    var listaAministrador = [],
        listaProfesores = [];
    var publicAppi = {
      getUsuarios : _getUsuarios,
      setUsuarios : _setUsuarios,
      setPerfil : _setPerfil,
      guardarDatos : _almacenarLocalStorage
    }

    return publicAppi;

    function _setPerfil() {
      _almacenarLocalStorage('administrador', listaUsuarios);
    }

    function _setNuevosUsuarios (pLlave, pLista){
      almacenarLocalStorage(pLlave, pLista);
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


    function _almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }
})();
