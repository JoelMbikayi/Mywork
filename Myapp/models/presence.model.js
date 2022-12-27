'use strict';
var dbConn = require('./bd');
//Cours object create
var Presence = function(presence){
  this.idPresence = presence.idPresence;
  this.presence = presence.presence;
  this.Etudiant_matricule=presence.Etudiant_matricule;
  this.Seance_idSeance = presence.Seance_idSeance;
}
  
Presence.create = function (newPresence, result) {
dbConn.query("INSERT INTO presence set ?", newPresence, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    console.log(res.insertidPresence);
    result(null, res.insertPresence);
  }
  });
};
Presence.findById = function (Seance_idSeance, result) {
dbConn.query("SELECT * FROM presence INNER JOIN etudiant ON presence.Etudiant_matricule=etudiant.matricule INNER JOIN seance ON presence.Seance_idSeance=seance.idSeance where presence.Seance_idSeance = ? ", Seance_idSeance, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Presence.findAll = function (result) {
dbConn.query("SELECT * FROM presence INNER JOIN etudiant ON presence.Etudiant_matricule=etudiant.matricule INNER JOIN seance ON presence.Seance_idSeance=seance.idSeance", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('presence : ', res);
  result(null, res);
}
});
};

Presence.findT = function (result) {
dbConn.query("SELECT * FROM presence INNER JOIN etudiant ON presence.Etudiant_matricule=etudiant.matricule INNER JOIN seance ON presence.Seance_idSeance=seance.idSeance", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('presence : ', res);
  result(null, res);
}
});
};


Presence.delete = function(idPresence, result){
dbConn.query("DELETE FROM presence WHERE idPresence = ?", [idPresence], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};




module.exports= Presence;
