const PROBLEM = require('../data/problem.json');
const PROBLEM_KEY = Object.keys(PROBLEM);

function isValidID(id) {
    return PROBLEM_KEY.includes(id);
}

function isAnswer(id, answer) {
    if (isValidID(id)) {
        if (PROBLEM[id]['answer'] === answer) {
            return PROBLEM[id]['next'];
        }
    }
    return null;
}

module.exports = { isValidID: isValidID, isAnswer: isAnswer };