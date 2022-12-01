const express = require('express')
const router = express.Router()
const auditoireController =   require('../controllers/auditoire.controller');
// Retrieve all employees
router.get('/', auditoireController.findAll);
// Create a new employee
router.post('/',auditoireController.create);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

// Retrieve a single employee with id
router.get('/:idAuditoire', auditoireController.findById);
// Update a employee with id
//router.put('/:idAuditoire', auditoireController.update);
// Delete a employee with id
router.delete('/:idAuditoire', auditoireController.delete);
module.exports = router