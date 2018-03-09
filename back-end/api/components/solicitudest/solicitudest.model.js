//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var SolicitudEstSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  cedula:{
    type: String,
    unique: true,
    required:true
  },
  edad:{
    type: String,
    required:true
  },
  genero:{
    type: String,
    required:true
  },
  carrera:{
    type: String,
    required:true
  },
  cursos:{
    type: String,
    required:true
  },
  foto:{
    type: String,
    required:true
  },
  email:{
    type: String,
    unique: true,
    required:true
  }
});

module.exports = mongoose.model('SolicitudEstudiante', SolicitudEstSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
