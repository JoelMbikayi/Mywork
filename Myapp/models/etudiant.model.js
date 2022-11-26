'use strict';
var dbConn = require('./bd');

//Employee object create
var Etudiant = function(etudiant){
  this.matricule     = etudiant.matricule;
  this.nom_complet     = etudiant.nom_complet;
  this.genre         = etudiant.genre;
  this.Promotion_idPromotion = etudiant.Promotion_idPromotion; 
  
};
Etudiant.create = function (newEtu, result) {
        dbConn.query(" INSERT INTO etudiant set ? ", newEtu, function (err, res) {
        if(err) {
        console.log("error: ", err);
        result(err, null);
        }
        else{
        console.log(res.insertMatricule);
        result(null, res.insertMatricule);
        }
    });
};
Etudiant.findById = function (matricule, result) {
dbConn.query("Select * from etudiant where matricule = ? ", matricule, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Etudiant.findAll = function (result) {
dbConn.query("Select * from etudiant", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('etudiant : ', res);
  result(null, res);
}
});
};
Etudiant.update = function(matricule, etudiant, result){
dbConn.query("UPDATE etudiant SET nom_complet=?,genre=?,Promotion_idPromotion=? WHERE matricule = ?", [etudiant.nom_complet, etudiant.genre,etudiant.Promotion_idPromotion, etudiant.matricule], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Etudiant.delete = function(matricule, result){
dbConn.query("DELETE FROM etudiant WHERE matricule = ?", [matricule], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Etudiant;

