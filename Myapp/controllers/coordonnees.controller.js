'use strict';
const Coordonnees = require('../models/coordonnees.model');

exports.findAll = function(req, res) {
Coordonnees.findAll(function(err, coordonnees) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', coordonnees);
  res.send(coordonnees);
});
};
exports.create = function(req, res) {
const new_coordonnees = new Coordonnees(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Coordonnees.create(new_coordonnees, function(err, coordonnees) {
  if (err)
  res.send(err);
  res.redirect('/dashbord');
  //res.json({error:false,message:"Coordonnateur added successfully!",data:coordonnateur});
});
}
};
exports.findById = function(req, res) {
Coordonnees.findById(req.params.idCoordonnees, function(err, coordonnees) {
  if (err)
  res.send(err);
  res.json(coordonnees);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Coordonnees.update(req.params.idCoordonnees, new Coordonnees(req.body), function(err, coordonnees) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Coordonnate successfully updated' });
});
}
};
exports.delete = function(req, res) {
Coordonnees.delete( req.params.idCoordonnees, function(err, coordonnees) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Coordonnate successfully deleted' });
});
};