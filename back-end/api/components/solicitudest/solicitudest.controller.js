//Requerimos el modelo  de usuarios
var SolicitudEstudiante = require('./solicitudest.model.js');
var config = require('../../config/database');
var bcrypt = require('bcrypt');

module.exports.save = function(req,res){ //exporta el controlador
  var currentPass;
  bcrypt.genSalt(10,function(err,salt){
      bcrypt.hash(req.body.password,salt,function(err,hash){
        currentPass = hash;

      });
    });
}

//Extraer datos
module.exports.findAll = function(req,res){
  SolicitudEstudiante.find().then(function(solicitudEst){
    res.send(solicitudEst);
  });
};

//Arreglar despues
module.exports.remove = function(req,res){
  console.log(req.body.id);
  SolicitudEstudiante.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}
