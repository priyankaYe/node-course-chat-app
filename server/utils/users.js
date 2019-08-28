[{
    id:'/#qwqdqweff12321ds',
    name:'Priyanka',
    room:'Node Room'
}]

class Users {
    constructor () {
        this.users = [];       
    }
    addUser (id,name,room) {
       var user = {id,name,room};
       this.users.push(user);
       return user;
    }

    removeUser(id){    
        var userToBeRemoved = this.users.filter((user)=> user.id === id)[0];   
        this.users = this.users.filter((user)=> user.id !== id);
        return userToBeRemoved;
    }

    getUser(id){
        return this.users.filter((user)=> user.id === id)[0];       
    }

    getUserList(room){
        var users = this.users.filter((user)=> user.room === room);
        var namesArray = users.map((user) =>user.name);
        return namesArray;
    }
}
    
module.exports = {Users}



// class Person {
//     constructor (name,age) {
//        this.name = name;
//        this.age = age;
//     }
//     getUserDescription () {
//         return `${this.name} is ${this.age} year`;
//     }
// }

// var me = new Person('Pri',28);
// var desc = me.getUserDescription();
// console.log(desc);
