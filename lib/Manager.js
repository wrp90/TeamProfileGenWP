const Employee = require ('./Employee');

class Manager extends Employee {
    constructor (name, ID, email, office) {
        super(name, ID, gitHub)
        this.email = email;
        this.office = office;
    }
    getEmail() {
        return this.email;
    }
    getOffice() {
        return this.office;
    }
}


module.exports = Manager; 