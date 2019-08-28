const expect= require('expect');

const {Users} =require('./users');

describe('Users' ,() =>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users=[{
            id:'1',
            name:'User1',
            room:'Room1'
        },{
            id:'2',
            name:'User2',
            room:'Room1'
        },{
            id:'3',
            name:'User3',
            room:'Room2'
        }]
    });

    it('should add new user',() =>{
        var users = new Users();
        var user={
            id:'123',
            name:'Pryanka',
            room:'Office Room'
        };
    var resUser= users.addUser(user.id,user.name,user.room);

    expect(users.users).toEqual([user]);

    });

    it('should remove a user',()=>{
        var user = users.removeUser('2');
        expect(users).not.toContain(user);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user',()=>{
        var user = users.removeUser('20');
        expect(user).toBeUndefined();
        expect(users.users.length).toBe(3);
    });

    it('should find a user',()=>{
        var userID = '2';
        var user= users.getUser(userID);
        expect(user.id).toBe(userID);
    });

    it('should not find a user',()=>{
        var userID = '20';
        var user = users.getUser(userID);
        expect(user).toBeUndefined();
    });

    it('should return names for Room2',() =>{
        var userList = users.getUserList('Room2');
        expect(userList).toEqual(['User3']);
    });

    it('should return names for Room1',() =>{
        var userList = users.getUserList('Room1');
        expect(userList).toEqual(['User1','User2']);
    });
});