'use strict';
var dbConn = require('./bd');
//Employee object create
var Coordonnateur = function(coordonnateur){
  this.idCoordonnateur=coordonnateur.idCoordonnateur;
  this.nom     = coordonnateur.nom;
  this.prenom  = coordonnateur.prenom;
  this.mail   = coordonnateur.mail;
 
  
};
Coordonnateur.create = function (newCord, result) {
dbConn.query("INSERT INTO coordonnateur set ?", newCord, function (err, res) {
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
Coordonnateur.findById = function (idCoordonnateur, result) {
dbConn.query("Select * from coordonnateur where idCoordonnateur = ? ", idCoordonnateur, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
};
Coordonnateur.findAll = function (result) {
dbConn.query("Select * from coordonnateur", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('coordonnateur : ', res);
    result(null, res);
  }
  });
};
Coordonnateur.update = function(idCoordonnateur, coordonnateur, result){
dbConn.query("UPDATE coordonnateur SET nom=?,prenom=?,mail=? WHERE idCoordonnateur = ?", [coordonnateur.nom,coordonnateur.prenom, coordonnateur.mail,idCoordonnateur], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Coordonnateur.delete = function(idCoordonnateur, result){
dbConn.query("DELETE FROM coordonnateur WHERE idCoordonnateur = ?", [idCoordonnateur], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Coordonnateur;

