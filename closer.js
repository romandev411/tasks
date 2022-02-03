function createAdder(n) {
    return function(m) {
        n = n + m;
        return n + m;
    }
}

const adder = createAdder(50);

function hiName(name) {
    return function(hi) {
        return hi + ' ' + name;
    }
}

const hiItem = hiName('Roman');

// console.log(hiItem(prompt('msg')));

function counterWrap(count = 0) {
    return function() {
        console.log(count)
        return ++count;
    }
}
const counter = counterWrap();

document.querySelector('.btn').addEventListener('click', function(e) {
    this.textContent = counter();
});

