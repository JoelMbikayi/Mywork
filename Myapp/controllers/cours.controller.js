'use strict';
const Cours = require('../models/cours.model');

exports.findAll = function(req, res) {
Cours.findAll(function(err, cours) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json({result : cours});
});
};
exports.create = function(req, res) {
const new_cours = new Cours(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Cours.create(new_cours, function(err, cours) {
  if (err)
  res.send(err);
  res.redirect('/dashboard');
 // res.json({error:false,message:"Compte added successfully!",data:compte});
});
}
};
exports.findById = function(req, res) {
Cours.findById(req.params.idCours, function(err, cours) {
  if (err)
  res.send(err);
  res.json(cours);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Cours.update(req.params.idCours, new Cours(req.body), function(err, cours) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Course successfully updated' });
});
}
};
exports.delete = function(req, res) {
Cours.delete( req.params.idCours, function(err, cours) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Cours successfully deleted' });
});
};