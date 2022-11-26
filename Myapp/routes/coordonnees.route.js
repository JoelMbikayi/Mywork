const express = require('express')
const router = express.Router()
const coordonneesController =   require('../controllers/coordonnees.controller');
// Retrieve all coordonnateur
router.get('/', coordonneesController.findAll);
// Create a new employee

router.get('API', function (req,res, next) {
	res.json;
});

router.post('/', coordonneesController.create);
// Retrieve a single employee with id
router.get('/:login',coordonneesController.findById);
// Update a employee with id
router.put('/:login', coordonneesController.update);
// Delete a employee with id
router.delete('/:login',coordonneesController.delete);
module.exports = router