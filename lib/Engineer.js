const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, git) {
        super(name, ID, email);
        this.git = git;
    }
    getGit() {
        return this.git;
    }
}


module.exports = Engineer; 