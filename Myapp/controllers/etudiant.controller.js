'use strict';
const Etudiant = require('../models/etudiant.model');
exports.findAll = function(req, res) {
Etudiant.findAll(function(err, etudiant) {
  console.log('controller')
  if (err)
  res.send(err);
  //console.log('res', etudiant);
  res.json({result : etudiant});

});
};
exports.create = function(req, res) {
    const new_etudiant = new Etudiant(req.body);
    //handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
    Etudiant.create(new_etudiant, function(err, etudiant) {
    if (err)
        res.send(err);
        res.redirect('/form');
        //res.json({error:false,message:"Etudiant added successfully!",data:etudiant});

        });
    }
};

exports.findbyPromotion = function(req, res){
Etudiant.findbyPromotion(req.params.promotion_idPromotion, function(err, etudiant){
    if(err)
    res.send(err);
    res.json(etudiant);
  });
};

exports.findById = function(req, res) {
Etudiant.findById(req.params.matricule, function(err, etudiant) {
  if (err)
  res.send(err);
  res.json(etudiant);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Etudiant.update(req.params.matricule, new Etudiant(req.body), function(err, etudiant) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Etudiant successfully updated' });
});
}
};
exports.delete = function(req, res) {
Etudiant.delete( req.params.matricule, function(err, etudiant) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Etudiant successfully deleted' });
});
};