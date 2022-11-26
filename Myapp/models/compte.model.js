'use strict';
var dbConn = require('./bd');
//Employee object create
var Compte = function(compte){
  this.login=compte.login;
  this.role     = compte.role;
  this.password  = compte.password;
  this.Coordonnateur_idCoordonnateur   = compte.Coordonnateur_idCoordonnateur;
 
  
};
Compte.create = function (newCompte, result) {
dbConn.query("INSERT INTO compte set ?", newCompte, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertLogin);
  result(null, res.insertLogin);
}
});
};
Compte.findById = function (login, result) {
dbConn.query("Select * from compte where login = ? ", login, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  result(null, res);
}
});
};
Compte.findAll = function (result) {
dbConn.query("Select * from compte", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('compte : ', res);
  result(null, res);
}
});
};
Compte.update = function(login, compte, result){
dbConn.query("UPDATE compte SET role=?,password=? WHERE login = ?", [compte.role,compte.password,compte.login], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Compte.delete = function(login, result){
dbConn.query("DELETE FROM compte WHERE login = ?", [login], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};

module.exports= Compte;

