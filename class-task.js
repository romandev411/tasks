class User {
    constructor(name, sername) {
        this.name = name;
        this.sername = sername;
    }

    getFullName() {
        return this.name + ' ' + this.sername;
    }
}

class Student extends User {
    constructor(name, sername, year) {
        super(name, sername);
        this.year = year;
    }

    getCourse() {
        const date = new Date();
        const year = date.getFullYear();

        return 'курс:' + (year - this.year);
    }
}

const stud = new Student('name', 'sername', '2000');