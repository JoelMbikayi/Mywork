'use strict';
var dbConn = require('./bd');
//Cours object create
var Seance = function(seance){
  this.idSeance = seance.idSeance;
  this.date     = seance.date;
  this.Cours_idCours  = seance.Cours_idCours;
  this.Auditoire_idAuditoire= seance.Auditoire_idAuditoire;
  this.heure_debut = seance.heure_debut;
  this.heure_fin = seance.heure_fin;
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
Seance.findAll = function (result) {
dbConn.query("Select * from seance", function (err, res) {
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

Seance.delete = function(idSeance, result){
dbConn.query("DELETE FROM seance WHERE idSeance = ?", [idSeance], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Seance;
