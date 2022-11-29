'use strict';
const Compte = require('../models/compte.model');

exports.findAll = function(req, res) {
Compte.findAll(function(err, compte) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json({result : compte});
});
};
exports.create = function(req, res) {
const new_compte = new Compte(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Compte.create(new_compte, function(err, compte) {
  if (err)
  res.send(err);
  res.redirect('/dashboard');
 // res.json({error:false,message:"Compte added successfully!",data:compte});
});
}
};
exports.findById = function(req, res) {
Compte.findById(req.params.login, function(err, compte) {
  if (err)
  res.send(err);
  res.json(compte);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Compte.update(req.params.login, new Compte(req.body), function(err, compte) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Compte successfully updated' });
});
}
};
exports.delete = function(req, res) {
Compte.delete( req.params.login, function(err, compte) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Compte successfully deleted' });
});
};