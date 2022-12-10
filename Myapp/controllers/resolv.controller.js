'use strict';

const Auditoire = require('../models/auditoire.model');
const auditoireController =   require('../controllers/auditoire.controller');
const braceletController =   require('../controllers/bracelet.controller');
const Bracelet = require('../models/bracelet.model');
const etudiant = require('../controllers/etudiant.controller');
const Promotion = require('/finalwork/mywork/myapp/models/promotion.model');
const cours = require('/finalwork/mywork/myapp/models/cours.model');
const bodyParser = require('body-parser');

var bracelet={'adress_mac': "F8",'wifi': null,"Bluetooth": null,"Etudiant_matricule": "12LM405"};

         

//bracelet = braceletController.findById(bracelet.address_mac);




etudiant = etudiant.findById(bracelet["Etudiant_matricule"]);

//promotion = etudiant['Promotion_idPromotion'];

//cours = cours.findById(promotion);



