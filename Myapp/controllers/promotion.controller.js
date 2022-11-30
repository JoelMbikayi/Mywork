'use strict';
const Promotion = require('../models/promotion.model');


exports.findAll = function(req, res) {
Promotion.findAll(function(err, promotion) {
  console.log('controller')
  if (err)
  res.send(err);
  res.json( promotion);
});
};
exports.create = function(req, res) {
const new_promotion = new Promotion(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Promotion.create(new_promotion, function(err, promotion) {
  if (err)
  res.send(err);
  res.json({error:false,message:"promotion added successfully!",data:promotion});
});
}
};
exports.findById = function(req, res) {
Promotion.findById(req.params.idPromotion, function(err, promotion) {
  if (err)
  res.send(err);
  res.json(promotion);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Promotion.update(req.params.idPromotion, new Promotion(req.body), function(err, promotion) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Promotion successfully updated' });
});
}
};
exports.delete = function(req, res) {
Promotion.delete( req.params.idPromotion, function(err, promotion) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Promotion successfully deleted' });
});
};