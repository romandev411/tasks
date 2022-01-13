'use strict';

const newPaper = {
    title: 'title',
    list: ['sfd', 'sfd', 'sf'],
    showArt() {
        this.list.forEach((el)=> {
            console.log(el+this.title)
        });
    }
}

newPaper.showArt();

const arrowArguments = (...args) => {
    const arr = [];
    args.forEach(el => arr.push(el));

    return arr;
}

console.log(arrowArguments(1,3,4,5,6));