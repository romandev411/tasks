function polindrom(str) {
    return str.split('').reverse().join('') === str;
}

console.log(polindrom('tenet'));
console.log(polindrom('tenddset'));

function vowel(str) {
    const VOWEL = ['a', 'e', 'i', 'o', 'u'];
    count = 0;

    for (let i = 0; i < str.length; i++) {
        if(VOWEL.includes(str[i])) {
            count++
        }
    }
    return count;
}

console.log(vowel('tenet'));