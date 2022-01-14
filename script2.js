function randomNumbers(count) {
    const arr = [];

    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * 10))
    }

    return arr;
}

console.log(randomNumbers(20));

function transcate(str, len) {
    return str.length > len ? str.substring(0, len)+'...' : str;
}

console.log(transcate('this string must be very long', 90));

const strJs = 'я-учу-javascript'.replaceAll('-', '!');

console.log(strJs)