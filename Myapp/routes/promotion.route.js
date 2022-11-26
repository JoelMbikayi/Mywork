const express = require('express')
const router = express.Router()
const promotionController =   require('../controllers/promotion.controller');
// Retrieve all coordonnateur
router.get('/', promotionController.findAll);
// Create a new employee
router.post('/', promotionController.create);
// Retrieve a single employee with id
router.get('/:idPromotion', promotionController.findById);
// Update a employee with id
router.put('/:idPromotion', promotionController.update);
// Delete a employee with id
router.delete('/:idPromotion',promotionController.delete);
module.exports = router