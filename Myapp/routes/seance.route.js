const express = require('express')
const router = express.Router()
const seanceController =   require('../controllers/seance.controller');
// Retrieve all employees
router.get('/', seanceController.findAll);
// Create a new employee
router.post('/',seanceController.create);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

// Retrieve a single employee with id
router.get('/:Cours_idCours', seanceController.findById);
// Update a employee with id
//router.put('/:idAuditoire', auditoireController.update);
// Delete a employee with id
router.delete('/:idSeance', seanceController.delete);
module.exports = router