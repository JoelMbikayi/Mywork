'use strict';
var dbConn = require('./bd');
//Cours object create
var Seance = function(seance){
  this.idSeance = seance.idSeance;
  this.date     = seance.date;
  this.duree  = seance.Cours_idCours;
  this.Auditoire_idAuditoire= seance.Auditoire_idAuditoire;
}
  
Seance.create = function (newSeance, result) {
dbConn.query("INSERT INTO seance set ?", newSeance, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      console.log(res.insertidSeance);
      result(null, res.insertSeance);
    }
  });
};
Seance.findById = function (idSeance, result) {
dbConn.query("Select * from seance where idSeance = ? ", idSeance, function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(err, null);
    }
    else{
      result(null, res);
    }
  });
};
Bracelet.findAll = function (result) {
dbConn.query("Select * seance", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('seance : ', res);
  result(null, res);
}
});
};

Bracelet.delete = function(address_mac, result){
dbConn.query("DELETE FROM seance WHERE adress_mac = ?", [address_mac], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Bracelet;
