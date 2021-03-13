const Intern = require ('../lib/Intern');


describe('Intern', () => {

    describe('Intern Constructor', () => {
        it('should return Intern attributes', () => {
            const intName = '';
            const intID = 12;
            const intEmail = 'wpapp90@gmail.com';
            const school = 'UT Austin';
            const newObject = new Intern(intName, intID, intEmail, school);
            expect(newObject.name).toEqual(expect.any(String));
            expect(newObject.getID()).toEqual(expect.any(Number));
            expect(newObject.getEmail()).toEqual(expect.stringContaining('@'));
            expect(newObject.getSchool()).toEqual(expect.any(String));
        });
    });

    describe('getSchool', () => {
        it('should return the Intern school', () => {
            const intName = '';
            const intID = 12;
            const intEmail = 'wpapp90@gmail.com';
            const school = 'UT Austin';
            const newObject = new Intern(intName, intID, intEmail, school);
            expect(newObject.getSchool()).toEqual(expect.any(String));
        })
    });

    describe('getRole', () => {
        it('should return the Intern role', () => {
            const intName = '';
            const intID = 12;
            const intEmail = '';
            const school = 'UT Austin';
            const newObject = new Intern(intName, intID, intEmail, school);
            expect(newObject.getRole()).toBe('Intern');
        })
    });
})