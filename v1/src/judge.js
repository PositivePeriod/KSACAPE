const PROBLEM = require('../data/problem.json');
const PROBLEM_KEY = Object.keys(PROBLEM);
console.log(PROBLEM_KEY);

function isValidID(id) {
    console.log(id, PROBLEM_KEY, id in PROBLEM_KEY);
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