function MyArr() {
    this.length = arguments.length;

    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }

    this.map = function map(func) {
        const newArr = [];

        for (let i = 0; i < this.length; i++) {
            newArr.push(func(this[i]));
        }

        return newArr;
    }
}

const arr1 = new MyArr(1,2,3,4);


const mapArr = arr1.map((el)=> {
    return el + 10;
})

console.log(mapArr)