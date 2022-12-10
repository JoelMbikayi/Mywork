var express = require('express');
var router = express.Router();
var dbConn = require('../models/bd');
//const Coordonnateur = require('../models/coordonnateur.model');
//const Coordonnateur = require('../controllers/coordonnateur.controller');
//var coordo = require('./../routes/coordonnateur.route');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/index', function(request, response) {
	// Capture the input fields
	let login = request.body.login;
	let password = request.body.password;
  let role = request.body.role;
	// Ensure the input fields exists and are not empty
	if (login && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		dbConn.query('SELECT * FROM compte WHERE login = ? AND password = ?', [login, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.login = login;
				// Redirect to home page
				response.redirect('/dashboard');
			} else {
				response.redirect('/');
			}			
			response.end();
		});
	} else {
		response.redirect('/');
		response.end();
	}
});

router.get('/dashboard', function(req, res, next) {

  if (req.session.loggedin) {
		// Output username
		res.render('dashboard' ,{session : req.session.login} );
	} else {
		// Not logged in
		res.send('Please login to view this page!');
    res.redirect('/');
	}
	res.end();
  
});

router.get('/auditoire', function(req, res, next) {
	res.render('auditoire',{ });
});


router.get('/form', function(req, res, next) {
  if (req.session.loggedin) {
  res.render('form',{session : req.session.login});
}else {
  // Not logged in
  //res.send('Please login to view this page!');
  res.render('form',{session : req.session.login});
  res.end();
}

});
router.get('/presence', function(req,res, next){
	res.render('presence', {});
});

router.get('/seance', function(req,res, next){
	res.render('seance', {});
});
router.get('/cours', function(req,res, next){
	res.render('cours', {});
});
router.get('/promotion1', function(req, res, next) {
  res.render('promotionL2gl', {});
});
router.get('/promotion2', function(req, res, next) {
    res.render('promotionL3gl',{});
  });
router.get('/secretaire', function(req, res, next) {

      res.render('secretaire',{});
    
  });
 //console.log(Coordonnateurss.findAll()); 
 //console.log(Coordonnateur.findAll()); 

router.get('/promotion', function(req, res, next) {
    res.render('promotion');
  });
router.get('/promotionL2gl', function(req, res, next) {
    res.render('promotionL2gl');
  });

router.get('/analysemath', function(req, res, next) {
      res.render('analysemath');
    });
 
module.exports = router;
