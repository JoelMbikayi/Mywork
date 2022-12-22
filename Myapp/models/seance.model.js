'use strict';
var dbConn = require('./bd');
const schedule = require('node-schedule');
const pres = require('./../functions/function');
const marquerPresence = require("../functions/function");

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

            const date = Date.parse(newSeance.heure_fin);
          //  console.log(date);

     /* const date = new Date(newSeance.date,newSeance.heure_fin);

      //newSeance.get
// */
        const idS = res.insertId;
        console.log(idS);

       const job = schedule.scheduleJob(date, function(){
        console.log('The world is going to end today.');
//
        marquerPresence(idS);
        //   marquerPresence(idS);
       });
            result(null, res.insertidSeance);

          }
        });
};
Seance.findById = function (Cours_idCours, result) {
dbConn.query("Select * from seance where Cours_idCours = ? ", Cours_idCours, function (err, res) {
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
