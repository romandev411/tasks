const obj = {
    str: 'string',
    number: '123',
    undefined: undefined,
    null: null,
    arr: ['arr1', null, undefined],
    obj: {
        str: 'string',
        number: '123',
        undefined: undefined,
        null: null,
    }
};

const json = JSON.stringify(obj);

console.log(json);

const objParse = JSON.parse(json);

console.log(objParse);

console.log(JSON.stringify([1,2,3, undefined]))

