(function(){
  angular
  .module('myApp')
  .service('registroServicio', registroServicio);

  function registroServicio(){
    var listaUsuarios = [];

    var publicAppi = {

      getUsuarios : _getUsuarios,
      setUsuarios : _setUsuarios,
      getUnProfesor : _getUnProfesor,
      getUnEstudiante : _getUnEstudiante
    }

    return publicAppi;

    function _setUsuarios(pElemento){
      var listaGuardada = _getUsuarios();

      listaGuardada.push(pElemento);

      almacenarLocalStorage('listaUsuariosRegistrados', listaGuardada);


    };

    function _getUnProfesor(cedulaProfesor) {
        var listaProfesores = _getUsuarios("profesor");
        var indice = listaProfesores.map(function (profesor) { return profesor['cedula']; }).indexOf(cedulaProfesor);
        return listaProfesores[indice];
    }

    function _getUnEstudiante(cedulaEstudiante) {
        var listaEstudiantes = _getUsuarios("estudiante");
        var indice = listaEstudiantes.map(function (estudiante) { return estudiante['cedula']; }).indexOf(cedulaEstudiante);
        return listaEstudiantes[indice];
    }

    function _getUsuarios(){
      var usuarios = JSON.parse(localStorage.getItem('listaUsuariosRegistrados')),
      lista = '';

      if(usuarios==null){
        lista = listaUsuarios;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }
})();
