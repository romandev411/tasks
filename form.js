const form = document.querySelector('#form');
const list = document.querySelector('#list');
let template;

function formHandler(e) {
    e.preventDefault();
    const val = e.target.elements.message.value.toLowerCase();
    console.log(e.target.elements.message)

    if (!val) {
        return;
    }

    template = useState(val).map((el)=>render(el));

    list.append(template[template.length-1]);
    e.target.reset();
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
