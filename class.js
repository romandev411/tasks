class User {
    constructor(name, surname, age, isBanned = false) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.isBanned = isBanned;
    }

    getFullName() {
        return this.name + this.surname;
    }
}

class Moderator extends User {
    constructor(name, surname, age, isBanned) {
        super(name, surname, age, isBanned);
    }

    bun(user) {
        user.isBanned = true;
    }

    unban(user) {
        user.isBanned = false;
    }
}

const u = new User('user1', 'userser', 20);
const mod = new Moderator('moder1', 'moderser', 20);

console.log(u);
console.log(mod);

// for (var i = 0; i<5; i++) {
//     setTimeout(function(){
//         console.log(i)
//     },0)
// }
