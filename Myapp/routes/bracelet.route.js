const express = require('express')
const router = express.Router()
const braceletController =   require('../controllers/bracelet.controller');
// Retrieve all coordonnateur
router.get('/', braceletController.findAll);
// Create a new employee

router.get('API', function (req,res, next) {
	res.json;
});

router.post('/', braceletController.create);
// Retrieve a single employee with id
router.get('/:address_mac',braceletController.findById);
// Update a employee with id
//router.put('/:login', braceletController.update);
// Delete a employee with id
router.delete('/:address_mac',braceletController.delete);
module.exports = router