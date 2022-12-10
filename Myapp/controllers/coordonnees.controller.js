'use strict';
const Coordonnees = require('../models/coordonnees.model');

exports.findAll = function(req, res) {
  Coordonnees.findAll(function(err, coordonnees) {
    console.log('controller')
    if (err)
    res.send(err);
    //console.log('res', etudiant);
   // res.responseType = 'json';
    res.json(coordonnees);
  
  });
  };
  exports.create = function(req, res) {
    const new_coord = new Coordonnees(req.body);
    //handles null error
    console.log(new_coord);
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
      Coordonnees.create(new_coord, function(err, coordonnees) {
    if (err)
        res.send(err);
       // res.redirect('/form');
        res.json({error:false,message:"coordonnees added successfully!",data:coordonnees});

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