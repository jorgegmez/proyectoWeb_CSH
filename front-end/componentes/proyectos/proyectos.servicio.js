(function () {
    angular
    .module('myApp')
    .service('proyectoServicio', proyectoServicio);

    function proyectoServicio() {

        var publicAPI = {

            asignarProfesor: _asignarProfesor,
            asignarEstudiante: _asignarEstudiante,
            buscarProyecto: _buscarProyecto,
            borrarProyecto: _borrarProyecto,
            getProyecto: _getProyecto,
            cambiarEstadoProyecto: _cambiarEstadoProyecto,
            agregarInfo: _agregarInfo,
            eliminarEstProyecto: _eliminarEstProyecto,
            eliminarProfProyecto: _eliminarProfProyecto,
            agregarAvance: _agregarAvance

        };
        return publicAPI;

        function _getProyecto() {
            var proyectos = JSON.parse(localStorage.getItem("formCli"));
            var listaNuevaProyectos;

            if (proyectos == null) {
                listaNuevaProyectos = [];
            } else {
                listaNuevaProyectos = proyectos;
            }
            return listaNuevaProyectos;
        }

        function _borrarProyecto(nombreProyecto) {
            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            listaProyectos.splice(indice, 1);
            almacenarLocalStorage('formCli', listaProyectos);
        }

        function _buscarProyecto(nombreProyecto) {
            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            return listaProyectos[indice];

        }

        function _asignarProfesor(nombreProyecto, profesor) {

            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            listaProyectos[indice].profesoresA.push(profesor)
            almacenarLocalStorage("formCli", listaProyectos);
        }

        function _asignarEstudiante(nombreProyecto,estudiante){

          var listaProyectos = _getProyecto();
          var indice = listaProyectos.map(function(proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
          listaProyectos[indice].estudiantes.push(estudiante)
          almacenarLocalStorage("formCli", listaProyectos);
        }

        function _cambiarEstadoProyecto(nombreProyecto, estadoProyecto) {

            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            listaProyectos[indice].estado = estadoProyecto;
            almacenarLocalStorage("formCli", listaProyectos);
        }

        function _eliminarEstProyecto(nombreProyecto,cedula){
          var listaProyectos = _getProyecto();
          var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
          var indiceEstudiante = listaProyectos[indice].estudiantes.map(function (estudiante) {
            return estudiante['cedula'];}).indexOf(cedula);
          listaProyectos[indice].estudiantes.splice(indiceEstudiante,1);
          almacenarLocalStorage("formCli", listaProyectos);
        }

        function _eliminarProfProyecto(nombreProyecto,cedula){
          var listaProyectos = _getProyecto();
          var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
          var indiceProfesor = listaProyectos[indice].profesoresA.map(function (profesor) {
            return profesor['cedula'];}).indexOf(cedula);
          listaProyectos[indice].profesoresA.splice(indiceProfesor,1);
          almacenarLocalStorage("formCli", listaProyectos);
        }

        function almacenarLocalStorage(pNombreElemento, pElemento) {

            localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

        }
        function _agregarInfo(nombreProyecto, info) {
            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            listaProyectos[indice].info.push(info);
            almacenarLocalStorage("formCli", listaProyectos);
        }

        function _agregarAvance(nombreProyecto, fechaInicio, fechaFinal, avance) {
            var listaProyectos = _getProyecto();
            var indice = listaProyectos.map(function (proyecto) { return proyecto['nombreP']; }).indexOf(nombreProyecto);
            alert(indice);
            listaProyectos[indice].fechaI = fechaInicio;
            listaProyectos[indice].fechaF = fechaFinal;
            listaProyectos[indice].avanceP = avance;
            almacenarLocalStorage("formCli", listaProyectos);
        }

    }

})();
