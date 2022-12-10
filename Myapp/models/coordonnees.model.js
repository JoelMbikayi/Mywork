'use strict';
var dbConn = require('./bd');
//Employee object create
var Coordonnees = function(coordonnees){
  this.idCoordonnees =coordonnees.idCoordonnees;
  this.latitude     = coordonnees.latitude;
  this.longitude  = coordonnees.longitude;
  //this.altitude   = coordonnees.altitude;
  this.Bracelet_adress_mac = coordonnees.Bracelet_adress_mac;
 
  
};
Coordonnees.create = function (newCord, result) {
dbConn.query("INSERT INTO coordonnees set ?", newCord, function (err, res) {
 // console.log(newCord)
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  //console.log(res.insertNom);
  result(null, res.insertNom);
}
});
};
Coordonnees.findById = function (idCoordonnees, result) {
dbConn.query("Select * from coordonnees where idCoordonnateur = ? ", idCoordonnees, function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(err, null);
  }
  else{
    result(null, res);
  }
  });
};

Coordonnees.findAll = function (result) {
dbConn.query("SELECT * from coordonnees", function (err, res) {
  if(err) {
    console.log("error: ", err);
    result(null, err);
  }
  else{
    console.log('coordonnees : ', res);
    result(null, res);
  }
  });
};



module.exports= Coordonnees;

