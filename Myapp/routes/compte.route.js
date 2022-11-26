const express = require('express')
const router = express.Router()
const compteController =   require('../controllers/compte.controller');
// Retrieve all coordonnateur
router.get('/', compteController.findAll);
// Create a new employee
router.post('/', compteController.create);
// Retrieve a single employee with id
router.get('/:login',compteController.findById);
// Update a employee with id
router.put('/:login', compteController.update);
// Delete a employee with id
router.delete('/:login',compteController.delete);
module.exports = router