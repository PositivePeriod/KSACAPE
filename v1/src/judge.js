const PROBLEM = require('../data/problem.json');

class Judge {
    constructor() {
        this.problem = Object.freeze(PROBLEM);
    }

    check(id, answer) {
        return this.problem[id]['answer'] === answer? this.problem[id]['next']: null;
    }
}

module.exports = new Judge();