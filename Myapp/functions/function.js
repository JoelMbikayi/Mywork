'use strict';
const geolib = require('geolib');
const mysql = require('mysql2');

const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydbtfc'
});
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
});
module.exports = dbConn;


//marquerPresence(22);


async function marquerPresence(idSeance) {

    let audi = (await Auditoire(idSeance))[0][0];
     let polygone = [
         [audi.latitude1, audi.longitude1],
         [audi.latitude2, audi.longitude2],
         [audi.latitude3, audi.longitude3],
         [audi.latitude4, audi.longitude4],
     ];

    let coordonnes = (await __Coordonnees(idSeance))[0];
    let etudiants = (await __Etudiants(idSeance))[0];

    for(let etudiant of etudiants) {
        let nbCoord = 0;
        let nbPres = 0;
        let nbAbs = 0;

         for(let coord of coordonnes) {

             if(etudiant.matricule == coord.matricule) {
                 nbCoord += 1;

                 var point = [coord.latitude, coord.longitude];

                 if(geolib.isPointInPolygon(point, polygone)){
                     nbPres++;
                 }else {
                     nbAbs++;
                 }
            }
         }

         let cent_pourcent = 4 * audi.diff_minute;
         let taux_presence = (nbPres / cent_pourcent) * 100;

         let estPresent = taux_presence >= 50;

        let presences = (await InsertPresence(estPresent,etudiant.matricule,idSeance));
        console.log(etudiant.matricule);


    }
}

function __Coordonnees(idSeance) {

    return dbConn.promise().query("SELECT seance.idSeance, cours.idCours, coordonnees.longitude,coordonnees.latitude,etudiant.matricule from seance,coordonnees,bracelet,etudiant,promotion,cours WHERE seance.idSeance=? AND seance.Cours_idCours=cours.idCours AND cours.Promotion_idPromotion=promotion.idPromotion AND promotion.idPromotion=etudiant.Promotion_idPromotion AND etudiant.matricule=bracelet.Etudiant_matricule AND bracelet.adress_mac=coordonnees.Bracelet_adress_mac AND coordonnees.heure>= seance.heure_debut AND coordonnees.heure <= seance.heure_fin", idSeance);

}

function __Etudiants(idSeance) {

    return dbConn.promise().query("SELECT seance.idSeance, cours.idCours, etudiant.matricule from seance,etudiant,promotion,cours WHERE seance.idSeance=? AND seance.Cours_idCours=cours.idCours AND cours.Promotion_idPromotion=promotion.idPromotion AND promotion.idPromotion=etudiant.Promotion_idPromotion", idSeance);

}
function InsertPresence(presence,matricule,seance){
    return dbConn.promise().query("INSERT INTO presence (presence,Etudiant_matricule,Seance_idSeance) values(?,?,?)",[presence,matricule,seance]);
}

function Auditoire(idSeance) {
    return dbConn.promise().query("SELECT *, TIMESTAMPDIFF(MINUTE, seance.heure_debut, seance.heure_fin) as diff_minute FROM auditoire, seance WHERE idSeance = ? AND seance.Auditoire_idAuditoire = auditoire.idAuditoire ", idSeance);
}

module.exports = marquerPresence;