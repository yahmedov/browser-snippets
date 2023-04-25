// pretty good type checking (alternative to typeof)
function checkType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
};

console.log(checkType('test')); // string
console.log(checkType(5)); // number
console.log(checkType(NaN)); // !!! number !!!
console.log(checkType(false)); // boolean
console.log(checkType({})); // object
console.log(checkType([])); // array
console.log(checkType(() => {})); // function
console.log(checkType(null)); // null
console.log(checkType(undefined)); // undefined
console.log(checkType(new Date())); // date
console.log(checkType(new Error())); // error
console.log(checkType(new Map())); // map
console.log(checkType(new Set())); // set

// -----------------------------------------------------
console.log('---------------------------')
// -----------------------------------------------------

// type check based on the constructor property (another alternative)
function checkConstructorType(data) {
    if (data !== undefined && data !== null) {
        return data.constructor.name.toLowerCase();
    } else {
        return data; // undefined or null
    }
};

console.log(checkConstructorType('test'));
console.log(checkConstructorType(5));
console.log(checkConstructorType(NaN)); // !!! Number() !!!
console.log(checkConstructorType(false));
console.log(checkConstructorType({}));
console.log(checkConstructorType([]));
console.log(checkConstructorType(() => {}));
console.log(checkConstructorType(null));
console.log(checkConstructorType(undefined));
console.log(checkConstructorType(new Date()));
console.log(checkConstructorType(new Error()));
console.log(checkConstructorType(new Map()));
console.log(checkConstructorType(new Set()));


// -----------------------------------------------------
console.log('---------------------------')
// -----------------------------------------------------

// type checking using typeof (primitive type)

function isArray(data) {
    if (typeof data === "object" && data.hasOwnProperty("length")) {
        console.log(data, 'is an Array');
    } else {
        console.log(data, 'is not an Array')
    }
}

function isObject(data) {
    if (typeof data === "object" && !data.hasOwnProperty("length")) {
        console.log(data, 'is an Object');
    } else {
        console.log(data, 'is not an Object')
    }
}

let thing;

thing = 'twelve';
console.log(typeof thing); // string

thing = 12;
console.log(typeof thing); // number

thing = false;
console.log(typeof thing); // boolean

thing = {};
console.log(typeof thing); // object
isObject(thing);

thing = [];
console.log(typeof thing); // object, array is also typeof object
isArray(thing);

// !!! Date, Error, Map, Set, Array and null are all primitive typeof object


thing = NaN;
console.log(typeof thing); // number, NaN is also typeof number
console.log(Number.isNaN()); // false, number in not NaN // cannot do NaN.isNaN()

thing = null;
console.log(typeof thing); // object, null is also typeof object
console.log(thing === null); // true

