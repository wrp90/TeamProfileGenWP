class Employee {
    constructor(role, name, id, email) {
        this.role = role,
        this.name = name, 
        this.id = id,
        this.email = email;
    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }
}

module.exports = Employee; 