'use strict';
const Bracelet = require('../models/bracelet.model');
const Etudiant = require("../models/etudiant.model");

exports.findAll = function(req, res) {
Bracelet.findAll(function(err, bracelet) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json({result : bracelet});
});
};
exports.create = function(req, res) {
const new_bracelet = new Bracelet(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Bracelet.create(new_bracelet, function(err, bracelet) {
  if (err)
  res.send(err);
  res.redirect('/form');
 // res.json({error:false,message:"Compte added successfully!",data:compte});
});
}
};
exports.findById = function(req, res) {
  Bracelet.findById(req.params.adress_mac );
  };
  
exports.delete = function(req, res) {
Bracelet.delete( req.params.login, function(err, bracelet) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Compte successfully deleted' });
});
};