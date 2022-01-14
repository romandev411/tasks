function MyArr() {
    this.length = arguments.length;

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
}

function MyProtoArray() {
    this.push = function push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
    }

    this.map = function map(func) {
        const newArr = [];

        for (let i = 0; i < this.length; i++) {
            newArr.push(func(this[i]));
        }

        return newArr;
    }

    this.some = function some(func) {
        for (let i = 0; i < this.length; i++) {
            if (func(this[i])) {
                return true;
            }
        }
        return false;
    }

    this.every = function every(func) {
        for (let i = 0; i < this.length; i++) {
            const result = func(this[i]);

            if (!result) {
                return false;
            }
        }
        return true;
    }

    this.isMyArray = function isImeArray(obj) {
        return (obj instanceof Object);
    }
}

MyArr.prototype = new MyProtoArray();

const arr1 = new MyArr(1,2,3,4);


const mapArr = arr1.map((el)=> {
    return el + 10;
})

const someArr = arr1.some((el)=> {
    return el < 2 ;
})

const everyArr = arr1.every((el)=> {
    return el < 2 ;
})

const isArr = arr1.isMyArray(arr1);


console.log('mapArr', mapArr);
console.log('someArr', someArr);
console.log('everyArr', everyArr);
console.log('isArr', isArr);