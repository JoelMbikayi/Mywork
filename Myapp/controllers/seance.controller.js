'use strict';
const Seance = require('../models/seance.model');

exports.findAll = function(req, res) {
Seance.findAll(function(err, seance) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json({result : seance});
});
};
exports.create = function(req, res) {
const new_seance = new Seance(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Seance.create(new_seance, function(err, seance) {
  if (err)
  res.send(err);
  res.redirect('/seance');
  //res.json({error:false,message:"Compte added successfully!",data:seance});
});
}
};
exports.findById = function(req, res) {
Seance.findById(req.params.idSeance, function(err, seance) {
  if (err)
  res.send(err);
  res.json(seance);
});
};
exports.delete = function(req, res) {
Seance.delete( req.params.idSeance, function(err, seance) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'seance successfully deleted' });
  });
};