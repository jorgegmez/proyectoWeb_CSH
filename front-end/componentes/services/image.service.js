(function(){
  angular
  .module('myApp')
  .service('ImageService', ImageService);

  function ImageService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/doxdejvxe/image/upload',
      data:{
        upload_preset: 'uv2sw1wx',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();
