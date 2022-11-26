const express = require('express')
const router = express.Router()
const coordonnateurController =   require('../controllers/coordonnateur.controller');
// Retrieve all coordonnateur
router.get('/', coordonnateurController.findAll);
// Create a new employee
router.post('/', coordonnateurController.create);
// Retrieve a single employee with id
router.get('/:idCoordonnateur', coordonnateurController.findById);
// Update a employee with id
router.put('/:idCoordonnateur', coordonnateurController.update);
// Delete a employee with id
router.delete('/:idCoordonnateur',coordonnateurController.delete);
module.exports = router