const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

    let users;
    beforeEach(() => {
        users = new Users;
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'CS'
        }, {
            id: '2',
            name: 'Chris',
            room: 'FoosBall'
        }, {
            id: '3',
            name: 'Jenn',
            room: 'CS'
        }]
    })

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Sanjay',
            room: 'the Office Fans'
        };
        let resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        let userId = '2';
        let user = users.removeUser(userId);
               
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        let userId = '5';
        let user = users.removeUser(userId);
               
        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);
               
        expect(user.id).toBe(userId);
    });

    it('should not find user', () => {
        let userId = '4';
        let user = users.getUser(userId);
               
        expect(user).toBeFalsy();
    });

    it('should return users for CS', () => {
        let userList = users.getUserList('CS');
               
        expect(userList).toEqual(['Mike', 'Jenn']);
    });

    it('should return users for FoosBall', () => {
        let userList = users.getUserList('FoosBall');
               
        expect(userList).toEqual(['Chris']);
    });
});