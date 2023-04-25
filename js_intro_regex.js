const string1 = 'This is the longest string ever.';
const string2 = 'This is the shortest string ever.';
const string3 = 'Is this the thing called Mount Everest?';
const string4 = 'This is the Sherman on the Mount.';

let regex;

function testRegEx() {
    console.log( regex.test(string1) );
    console.log( regex.test(string2) );
    console.log( regex.test(string3) );
    console.log( regex.test(string4) );
    console.log('\n');
}

// "this" is included in the text
regex = /this/;
testRegEx();

// "this" (case insensitive) is included in the text
regex = /this/i;
testRegEx();

// "this" (case insensitive) is included in the (beginning) text
regex = /^this/i;
testRegEx();

// "this" (case insensitive) is included in the (end) text
regex = /this$/i;
testRegEx();

// "ever" (case insensitive) is included in the (end) text (followed by any single character)
regex = /ever.$/i;
testRegEx();

// "ever" (case insensitive) is included in the (end) text (followed by dot sign)
regex = /ever\.$/i;
testRegEx();


// More info:
// https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Regular_Expressions
// http://regex.info/book.html
