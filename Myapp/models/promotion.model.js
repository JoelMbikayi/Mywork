'use strict';
var dbConn = require('./bd');
//Employee object create
const Coordonnateur = require('./coordonnateur.model');
var Promotion = function(promotion){
  this.idPromotion=promotion.idPromotion;
  this.nom     = promotion.nom;
  this.filiere  = promotion.filiere;
  this.Coordonnateur_idCoordonnateur   = promotion.Coordonnateur_idCoordonnateur;
 
  
};
Promotion.create = function (newPromotion, result) {
dbConn.query("INSERT INTO promotion set ?", newPromotion, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertNom);
  result(null, res.insertNom);
}
});
};
Promotion.findById = function (idPromotion, result) {
dbConn.query("Select * from promotion where idPromotion = ? ", idPromotion, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Promotion.findAll = function (result) {
dbConn.query("Select * from promotion", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('promotion : ', res);
  result(null, res);
}
});
};
Promotion.update = function(idPromotion, promotion, result){
dbConn.query("UPDATE promotion SET nom=?,filiere=?,Coordonnateur_idCoordonnateur=? WHERE idPromotion = ?", [promotion.nom,promotion.filiere, Coordonnateur.idcoordonnateur,idPromotion], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Promotion.delete = function(idPromotion, result){
dbConn.query("DELETE FROM promotion WHERE idPromotion = ?", [idPromotion], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Promotion;

