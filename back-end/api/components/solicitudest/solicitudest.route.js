var express = require('express');
var	router = express.Router();
var userController = require('./solicitudest.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/solicitudest')
  .post(function(req, res){
    userController.save(req,res);
 	});

router.route('/solicitudest')
  .get(function(req, res){
      userController.findAll(req,res);
  });
router.route('/solicitudest/:id')
  .delete(function(req, res){
    userController.remove(req,res);
 	});


// Se exporta el modulo
module.exports = router;
