'use strict';
const Auditoire = require('../models/auditoire.model');

exports.findAll = function(req, res) {
Auditoire.findAll(function(err, auditoire) {
  console.log('controller')
  if (err)
  res.send(err);
  //console.log('res', auditoire);
  //res.send(auditoire);
  res.json({result : auditoire});
});
};
exports.create = function(req, res) {
const new_auditoire = new Auditoire(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Auditoire.create(new_auditoire, function(err, auditoire) {
  if (err)
  res.send(err);
  //res.redirect('/dashboard');
  res.redirect('/auditoire');
  //res.json({error:false,message:"auditoire added successfully!",data:auditoire});
});
}
};
exports.findById = function(req, res) {
Auditoire.findById(req.params.idAuditoire, function(err, auditoire) {
  if (err)
  res.send(err);
  res.json(auditoire);
});
};
exports.delete = function(req, res) {
Auditoire.delete( req.params.idAuditoire, function(err, auditoire) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Compte successfully deleted' });
});
};