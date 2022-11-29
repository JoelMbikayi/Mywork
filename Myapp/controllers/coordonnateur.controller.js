'use strict';
const Coordonnateur = require('../models/coordonnateur.model');

exports.findAll = function(req, res) {
  Coordonnateur.findAll(function(err, coordonnateur) {
    console.log('controller')
    if (err)
    res.send(err);
    //console.log('res', etudiant);
   // res.responseType = 'json';
    res.json(coordonnateur);
  
  });
  };
exports.create = function(req, res) {
const new_coordonnateur = new Coordonnateur(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Coordonnateur.create(new_coordonnateur, function(err, coordonnateur) {
  if (err)
  res.send(err);
  res.redirect('/dashboard');
  //res.json({error:false,message:"Coordonnateur added successfully!",data:coordonnateur});
});
}
};
exports.findById = function(req, res) {
Coordonnateur.findById(req.params.idCoordonnateur, function(err, coordonnateur) {
  if (err)
  res.send(err);
  res.json(coordonnateur);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Coordonnateur.update(req.params.idCoordonnateur, new Coordonnateur(req.body), function(err, coordonnateur) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Coordonnateur successfully updated' });
});
}
};
exports.delete = function(req, res) {
Coordonnateur.delete( req.params.idCoordonnateur, function(err, coordonnateur) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Coordonnateur successfully deleted' });
});
};