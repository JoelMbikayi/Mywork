'use strict';
var dbConn = require('./bd');
//Cours object create
var Bracelet = function(bracelet){
  this.adress_mac=bracelet.adress_mac;
  this.wifi     = bracelet.wifi;
  this.Bluetooth = bracelet.Bluetooth;
  this.Etudiant_matricule  = bracelet.Etudiant_matricule;
}
  
Bracelet.create = function (newBracelet, result) {
dbConn.query("INSERT INTO bracelet set ?", newBracelet, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertadress_mac);
  result(null, res.insertBracelet);
}
});
};
Bracelet.findById = function (address_mac, result) {
dbConn.query("Select * from bracelet where adress_mac = ? ", address_mac, function (err, res) {
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
dbConn.query("Select * from bracelet", function (err, res) {
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

Bracelet.delete = function(address_mac, result){
dbConn.query("DELETE FROM bracelet WHERE adress_mac = ?", [address_mac], function (err, res) {
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
