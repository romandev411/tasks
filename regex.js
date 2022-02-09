function checkName(name) {
    const regItem = '^[A-Z][a-z]{1,}[ ][A-Z][a-z]{1,}$'
    const reg = new RegExp(regItem);
    return reg.test(name)
}

const test1 = checkName('name');
const test2 = checkName('Name Name');
console.log(test1);
console.log(test2);

const reg2 = /[[a-z]{1,}\b/g;
const str = 'lorem ipsum';
console.log(str.replace(reg2, 'riba'));

// (^[a-z]{2}|[A-Z]{2})[0-9]{4}(-[0-9]{0,}){0,1}

// fe2022
// fe2022-1
// fe2022-55
// FE2020
// fm2022
// fd2022

// ----
// Invalid:
// fffffe2020
// fE2022
// Fe2022
// fm2022/1