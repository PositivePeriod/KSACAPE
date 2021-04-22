var express = require('express');
var router = express.Router();
const isValidID = require('./judge').isValidID;
const isAnswer = require('./judge').isAnswer;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    // console.log(`problem${req.url} | ${Date.now()}`);
    next();
});
// define the home page route
router.get('/', function(req, res) {
    res.redirect('../');
});
// define the about route
router.get('/:id/', function(req, res) {
    var id = req.params.id;
    if (isValidID(id)) {
        res.send(`Problem ${id}`);
        console.log(`problem${req.url} |`);
    } else {
        res.status(404).send('No such problem :(');
    }
});
router.get('/:id/:answer', function(req, res) {
    var id = req.params.id;
    var answer = req.params.answer;
    if (isValidID(id)) {
        var newID = isAnswer(id, answer);
        if (newID !== null) {
            res.redirect(`../${newID}`)
            console.log(`problem${req.url} | Right answer ${answer} -> ${newID}`);
        } else {
            res.send(`Problem ${id} with wrong answer`);
            console.log(`problem${req.url} | Wrong answer ${answer}`);
        }
    } else {
        res.status(404).send('No such problem :(');
    }
});
router.use(function(req, res, next) {
    res.status(404).send('No such page :(');
});

module.exports = router;