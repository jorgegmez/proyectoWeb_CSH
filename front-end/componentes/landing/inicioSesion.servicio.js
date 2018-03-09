(function(){
  angular
  .module('myApp')
  .service('inicioServicio', inicioServicio);

  function inicioServicio(){
    var listaUsuarios = {
        nombre : 'Kevin',
        apellidos : 'Martinez Ellis',
        carrera : 'Desarrollo web',
        cedula : '115360896',
        correo : 'kmartineze@ucenfotec.ac.cr',
        contrasenna : 'administrador1',
        rol : 'administrador'
      };

    var listaUsuariosActivos = [];

    var publicAppi = {
      getUsuarios : _getUsuarios,
      getAdministrador : _getAdministrador,
      setAdministrador : _setAdministrador,
      guardarDatos : _almacenarLocalStorage

    }

    return publicAppi;

    function _setNombreUsuario(pNombre) {
      var nombreUsuario = pNombre;

      return nombreUsuario;
    }

    function _getUsuarios(){
      var usuarios = JSON.parse(localStorage.getItem('listaUsuariosRegistrados')),
      lista = '' ;

      if(usuarios==null){
        lista = listaUsuariosActivos;
      }else{
        lista = usuarios;
      }

      return lista;
    }

    function _setAdministrador (){
      var admin = JSON.parse(localStorage.getItem('administrador')),
      lista = '' ;

      if(admin==null){
        lista = listaUsuarios;
        _almacenarLocalStorage('administrador', lista);
      }else{
        lista = admin;
      }

      return lista;
    }


    function _getAdministrador(){
      var admin = JSON.parse(localStorage.getItem('administrador')),
      lista = '' ;

      if(admin==null){
        lista = listaUsuarios;
        _almacenarLocalStorage('administrador', lista);
      }else{
        lista = admin;
      }

      return lista;
    }

    function _setNombreUsuario(pCorreo) {
      _almacenarLocalStorage('correoUsuarioActivo', pCorreo);
    };


    function _almacenarLocalStorage (pNombreElemento, pElemento){

      localStorage.setItem(pNombreElemento, JSON.stringify(pElemento));

    }
  }
})();
