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
    let res = 0;
    
    args.forEach(el => res += el);

    return res;
}

console.log(arrowArguments(1,3,4,5,6));