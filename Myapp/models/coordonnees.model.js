'use strict';
var dbConn = require('./bd');
//Cours object create
var Coordonnees = function(coordonnees){
  this.idCoordonnees=coordonnees.idCoordonnees;
  this.longitude     = coordonnees.longitude;
  this.latitude  = coordonnees.latitude;
  this.altitude = coordonnees.altitude;
  this.Bracelet_address_mac = coordonnees.Bracelet_address_mac;
}
  
Coordonnees.create = function (newCoordonnees, result) {
dbConn.query("INSERT INTO coordonnees set ?", newCoordonnees, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertidCoordonnees);
  result(null, res.insertCordonnees);
}
});
};
Coordonnees.findById = function (Bracelet_address_mac, result) {
dbConn.query("Select * from coordonnees where idCoordonnees = ? ", Bracelet_address_mac, function (err, res) {
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
dbConn.query("Select * from coordonnees", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('bracelet : ', res);
  result(null, res);
}
});
};

Coordonnees.delete = function(idCoordonnees, result){
dbConn.query("DELETE FROM coordonnees WHERE idCoordonnees = ?", [idCoordonnees], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Coordonnees;
