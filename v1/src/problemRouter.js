var express = require('express');
var router = express.Router();
const judge = require('./judge');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log(`prob | ${req.url} | ${Date.now()}`);
    next();
});
// define the home page route
router.get('/', function(req, res) {
    res.redirect('../');
});
// define the about route
router.get('/:id/', function(req, res) {
    var id = req.params.id;
    var answer = req.params.answer;
    res.send(`Problem ${id}`);
});
router.get('/:id/:answer', function(req, res) {
    var id = req.params.id;
    var answer = req.params.answer;
    var newID = judge.check(id, answer)
    if (newID !== null) {
        res.redirect(`../${newID}`)
        console.log(`prob | ${req.url} | Right answer ${answer} -> ${newID}`);
    }
    res.send(`Problem ${id} with wrong answer`);
    console.log(`prob | ${req.url} | Wrong answer ${answer}`);
});
router.use(function(req, res, next) {
    res.status(404).send('No such problem :(');
});

module.exports = router;