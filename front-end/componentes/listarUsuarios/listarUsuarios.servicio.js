(function(){
  angular
  .module('myApp')
  .service('listarUsuariosServicio', listarUsuariosServicio);

  function listarUsuariosServicio(){
    var listaUsuarios = [];

    var publicAppi = {
      
      buscarUsuarios : _buscarUsuarios,
      getUsuarios : _getUsuarios,
      setUsuarios : _setUsuarios,
    };

    return publicAppi;

    function _setUsuarios(pElemento){
      var listaGuardada = _getUsuarios();
      //listaUsuarios.push(pElemento);
      listaGuardada.push(pElemento);
      almacenarLocalStorage("listaUsuariosNuevas", listaGuardada);


    }

    function _getUsuarios(){
      var usuarios = JSON.parse(localStorage.getItem("listaUsuariosRegistrados")),
      lista = '' ;

      if(usuarios === null){
        lista = listaUsuarios;
      }else{
        lista = usuarios;
      }

      return lista;
    }


    function _buscarUsuarios(correoUsuario) {
        var listaUsuarios = _getUsuarios(nombreLlave);
        var indice = listaUsuarios.map(function (usuario) { return usuario['correo']; }).indexOf(correoUsuario);
        return listaUsuarios[indice];

    }




    function almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }
})();
