const express = require('express')
const router = express.Router()
const coursController =   require('../controllers/cours.controller');
// Retrieve all coordonnateur
router.get('/', coursController.findAll);
// Create a new employee
router.post('/', coursController.create);
// Retrieve a single employee with id
router.get('/:idCours',coursController.findById);
// Update a employee with id
router.put('/:idCours', coursController.update);
// Delete a employee with id
router.delete('/:idCours',coursController.delete);
module.exports = router