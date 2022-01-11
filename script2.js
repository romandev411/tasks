function randomNumbers(count) {
    const arr = [];

    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * 10))
    }

    return arr;
}

console.log(randomNumbers(20))