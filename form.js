const form = document.querySelector('#form');
const list = document.querySelector('#list');
let template;

function formHandler(e) {
    e.preventDefault();
    const val = e.target.elements[0].value.toLowerCase();

    if (!val) {
        return;
    }

    template = useState(val).map((el)=>render(el));

    list.append(template[template.length-1]);
}

function state(arr = []) {
    return function(val) {
        arr.push(val);
        return arr;
    }
}

const useState = state();

function render(val) {
    const li = document.createElement('li');
    li.textContent = val;
    return li;
}

form.addEventListener('submit', formHandler);
