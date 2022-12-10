const express = require('express')
const router = express.Router()
const etudiantController =   require('../controllers/etudiant.controller');
// Retrieve all employees
router.get('/', etudiantController.findAll);
// Create a new employee
router.post('/',etudiantController.create);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

// Retrieve a single employee with id
router.get('/:matricule', etudiantController.findById);
//
router.get('/etprom/:Promotion_idPromotion',etudiantController.findbyPromotion);
// Update a employee with id

router.put('/:matricule', etudiantController.update);


// Delete a employee with id
router.delete('/:matricule', etudiantController.delete);
module.exports = router