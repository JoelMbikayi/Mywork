'use strict';
var dbConn = require('./bd');
//Cours object create
var Cours = function(cours){
  this.idCours=cours.idCours;
  this.nom     = cours.nom;
  this.ponderation  = cours.ponderation;
  this.Promotion_idPromotion=cours.Promotion_idPromotion;
  
};
Cours.create = function (newCours, result) {
dbConn.query("INSERT INTO cours set ?", newCours, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertidCours);
  result(null, res.insertCours);
}
});
};
Cours.findById = function (idCours, result) {
dbConn.query("Select * from cours where idCours = ? ", idCours, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Cours.findAll = function (result) {
dbConn.query("Select * from cours", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('cours : ', res);
  result(null, res);
}
});
};
Cours.update = function(idCours, cours, result){
dbConn.query("UPDATE cours SET nom=?,ponderation=? WHERE idCours = ?", [cours.nom,cours.ponderation,cours.idCours], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Cours.delete = function(idCours, result){
dbConn.query("DELETE FROM cours WHERE idCours = ?", [idCours], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Cours;

