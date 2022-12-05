const express = require('express')
const router = express.Router()
const presenceController =   require('../controllers/presence.controller');
// Retrieve all employees
router.get('/', presenceController.findAll);
// Create a new employee
router.post('/',presenceController.create);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

// Retrieve a single employee with id
router.get('/:idPresence', presenceController.findById);
// Update a employee with id
//router.put('/:idAuditoire', auditoireController.update);
// Delete a employee with id
router.delete('/:idPresnce', presenceController.delete);
module.exports = router