const Manager = require ('../lib/Manager');


describe('Manager', () => {

    describe('Manager Constructor', () => {
        it('should return Manager attributes', () => {
            const manName = '';
            const manID = 12;
            const manEmail = 'wpapp90@gmail.com';
            const officeNum = 1234;
            const newObject = new Manager(manName, manID, manEmail, officeNum);
            expect(newObject.name).toEqual(expect.any(String));
            expect(newObject.getID()).toEqual(expect.any(Number));
            expect(newObject.getEmail()).toEqual(expect.stringContaining('@'));
            expect(newObject.getOffice()).toEqual(expect.any(Number));
        });
    });

    describe('getRole', () => {
        it('should return the Manager role', () => {
            const manName = '';
            const manID = 12;
            const manEmail = '';
            const officeNum = 1234

            const newObject = new Manager(manName, manID, manEmail, officeNum);

            expect(newObject.getRole()).toBe('Manager')
        })
    });
})