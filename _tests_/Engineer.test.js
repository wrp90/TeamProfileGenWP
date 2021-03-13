const Engineer = require ('../lib/Engineer');


describe('Engineer', () => {

    describe('Engineer Constructor', () => {
        it('should return Engineer attributes', () => {
            const engName = '';
            const engID = 12;
            const engEmail = 'wpapp90@gmail.com';
            const git = 'wrp90';
            const newObject = new Engineer(engName, engID, engEmail, git);
            expect(newObject.name).toEqual(expect.any(String));
            expect(newObject.getID()).toEqual(expect.any(Number));
            expect(newObject.getEmail()).toEqual(expect.stringContaining('@'));
            expect(newObject.getGit()).toEqual(expect.any(String));
        });
    });

    describe('getGit', () => {
        it('should return the Engineer git', () => {
            const engName = '';
            const engID = 12;
            const engEmail = 'wpapp90@gmail.com';
            const git = 'wrp90';
            const newObject = new Engineer(engName, engID, engEmail, git);
            expect(newObject.getGit()).toEqual(expect.any(String));
        })
    });

    describe('getRole', () => {
        it('should return the Engineer role', () => {
            const engName = '';
            const engID = 12;
            const engEmail = '';
            const git = 'wrp90';
            const newObject = new Engineer(engName, engID, engEmail, git);
            expect(newObject.getRole()).toBe('Engineer');
        })
    });
})