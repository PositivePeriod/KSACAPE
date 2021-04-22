var express = require('express');
var fs = require('fs');
var path = require('path');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    // console.log(`${req.url} | ${Date.now()}`);
    console.log(`${req.url} |`);
    next();
});
// define the home page route
router.get('/', function(req, res) {
    // res.send('Main Home page');
    const data = {
        title: 'MAIN',
        body: fs.readFileSync(path.resolve(__dirname, '../views/body/main.html'), 'utf8')
    }
    res.render('template.ejs', data);
});

// Account
router.get('/login', function(req, res) {
    res.send('Enter your AA code');
});
router.get('/register', function(req, res) {
    res.send('Try to make new account');
});

router.get('/start', function(req, res) {
    // res.send('Click the button to start Already given');
    const data = {
        title: 'START',
        body: fs.readFileSync(path.resolve(__dirname, '../views/body/start.html'), 'utf8')
    }
    res.render('template.ejs', data);
});
router.get('/about', function(req, res) {
    res.send('Who made the site? By KSA STUDENTS!');
});
router.get('/leaderboard', function(req, res) {
    res.send('Take a look! LEADER BOARD Go for it! Beat other teams :)');
});
router.get('/easteregg', function(req, res) {
    res.send("Nice try but dont you think it is too obvious? :(");
});

router.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

module.exports = router;