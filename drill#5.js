'use strict';
const words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const wordsArr = words.split(' ');
const decoded = wordsArr.reduce((decodedString,word) => {
    if(word.length === 3) {
        return decodedString + ' ';
    } else {
        return decodedString + word[word.length - 1].toUpperCase();
    }
}, '');

console.log(decoded); 
