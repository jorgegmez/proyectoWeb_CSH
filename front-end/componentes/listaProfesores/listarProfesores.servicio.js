(function(){
  angular
  .module('myApp')
  .service('listarProfServicio', listarProfServicio);

  function listarProfServicio(){
    var listaProyectos = [];
        listaProfesores = [],
        listaEstudiantes = [];


    var publicAppi = {
      getProyectos : _getProyectos,
      getProfesores : _getProfesores,
      getEstudiantes : _getEstudiantes
    };

    return publicAppi;

    function _getProyectos(pProyecto){
      listaProyectos = pProyecto;
      return listaProyectos;
    };

    function _getProfesores(pProfesores){

      var lista = pProfesores;

      for (var i = 0; i < lista.length; i++) {
        listaProfesores.push(lista[i].profesoresA[i]);
      }
    return listaProfesores;
    };

    function _getEstudiantes(pEstudiantes){

      var nombreEstudiantes = pEstudiantes;

      for (var i = 0; i < nombreEstudiantes.length; i++) {
        listaEstudiantes.push(nombreEstudiantes[i].estudiantes[i]);

      }

      return listaEstudiantes;
    };


    function almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    };
  }
})();
