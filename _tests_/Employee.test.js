
const Employee = require ('../lib/Employee');


describe('Employee', () => {

    describe('Employee Constructor', () => {
        it('should return employee attributes', () => {
            const empName = '';
            const empID = 1;
            const empEmail = 'wpapp90@gmail.com';
            const newObject = new Employee(empName, empID, empEmail);
            expect(newObject.name).toEqual(expect.any(String));
            expect(newObject.getID()).toEqual(expect.any(Number))
            expect(newObject.getEmail()).toEqual(expect.stringContaining('@'));
        });
    });

    describe('getName', () => {
        it('should return employee name', () => {
            const empName = '';
            const newObject = new Employee(empName);
            expect(newObject.name).toEqual(expect.any(String));
        })
    });

    describe('getID', () => {
        it('should return employee ID', () => {
            const empName = '';
            const empID = 1;
            const newObject = new Employee(empName, empID);
            expect(newObject.getID()).toEqual(expect.any(Number))
        })
    });

    describe('getEmail', () => {
        it('should return the employee email', () => {
            const empName = '';
            const empID = 1;
            const empEmail = 'wpapp90@gmail.com';
            const newObject = new Employee(empName, empID, empEmail);
            expect(newObject.getEmail()).toEqual(expect.stringContaining('@'));
        })
    });

    describe('getRole', () => {
        it('should return the Employee role', () => {
            const empName = '';
            const empID = 1;
            const empEmail = '';
            const newObject = new Employee(empName, empID, empEmail);
            expect(newObject.getRole()).toBe('Employee')
        })
    });
})


