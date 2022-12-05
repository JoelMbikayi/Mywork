'use strict';
const Presence = require('../models/Presence.model');

exports.findAll = function(req, res) {
Presence.findAll(function(err, presence) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json({result : presence});
});
};
exports.create = function(req, res) {
const new_presence = new Presence(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Presence.create(new_presence, function(err, presence) {
  if (err)
  res.send(err);
  //res.redirect('/dashboard');
  res.json({error:false,message:"Compte added successfully!",data:presence});
});
}
};
exports.findById = function(req, res) {
Presence.findById(req.params.idPresence, function(err, presence) {
  if (err)
  res.send(err);
  res.json(presence);
});
};
exports.delete = function(req, res) {
Presence.delete( req.params.idPresence, function(err, presence) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Presence successfully deleted' });
  });
};