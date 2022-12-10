'use strict';
var dbConn = require('./bd');
//Cours object create
var Auditoire = function(auditoire){
  this.idAuditoire = auditoire.idAuditoire;
  this.nom = auditoire.nom;
  this.latitude1=auditoire.latitude1;
  this.longitude1 =auditoire.longitude1;
  this.latitude2=auditoire.latitude2;
  this.longitude2 =auditoire.longitude2;
  this.latitude3=auditoire.latitude3;
  this.longitude3 =auditoire.longitude3;
  this.latitude4=auditoire.latitude4;
  this.longitude4 =auditoire.longitude4;
  this.altmin = auditoire.altmin;
  this.altmax = auditoire.altmax;

}
  
Auditoire.create = function (newAuditoire, result) {
dbConn.query("INSERT INTO auditoire set ?", newAuditoire, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    console.log(res.insertidAuditoire);
    result(null, res.insertAuditoire);
  }
  });
};
Auditoire.findById = function (idAuditoire, result) {
dbConn.query("Select * from auditoire where idAuditoire = ? ", idAuditoire, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Auditoire.findAll = function (result) {
dbConn.query("Select * from auditoire", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('auditoire : ', res);
  result(null, res);
}
});
};

Auditoire.delete = function(idAuditoire, result){
dbConn.query("DELETE FROM auditoire WHERE idAuditoire = ?", [idAuditoire], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Auditoire;
