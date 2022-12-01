var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
const cors = require('cors');
var path = require('path');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const etudiantRoutes = require('/FinalWork/Mywork/Myapp/routes/etudiant.route');
const coordoRoutes = require('/Finalwork/Mywork/Myapp/routes/coordonnateur.route');
const PromotionRoutes = require('/Finalwork/Mywork/Myapp/routes/promotion.route');
const CompteRoutes = require('/Finalwork/Mywork/Myapp/routes/compte.route');
const CoursRoutes = require('/Finalwork/Mywork/Myapp/routes/cours.route');
const CoordonneesRoutes = require('/Finalwork/Mywork/Myapp/routes/coordonnees.route');
const AuditoireRoutes = require('/Finalwork/Mywork/Myapp/routes/auditoire.route');
// using as middleware

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/index');
var formRouter = require('./routes/index');
var promoRouter = require('./routes/index');
var secretaireRouter = require('./routes/index');
var promotionL2glRouter = require("./routes/index");
var promotionL3glRouter = require("./routes/index");
var Cour1Router = require("./routes/index");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, "js")));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/etudiant', etudiantRoutes);
app.use('/api/v1/coordonnateur', coordoRoutes);
app.use('/api/v1/promotion', PromotionRoutes);
app.use('/api/v1/compte', CompteRoutes);
app.use('/api/v1/cours', CoursRoutes);
app.use('/api/v1/coordonnees', CoordonneesRoutes);
app.use('/api/v1/auditoire', AuditoireRoutes);
app.use('/', indexRouter);



app.use('/users', usersRouter);
app.use('/', indexRouter);
app.use('/Horaire', indexRouter);
app.use('/users', usersRouter);
app.use('/cours', usersRouter);
app.use('/dashboard', dashboardRouter);
app.use('/form', formRouter);
app.use('/promotion', promoRouter);
app.use('/secretaire', secretaireRouter);
app.use('promotion',promoRouter);
app.use('promotionL2gl',promotionL2glRouter);
app.use('promotionL3gl',promotionL3glRouter);
app.use('/analysemath',Cour1Router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(cors({
    origin: 'http://localhost:3000'
}))

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
