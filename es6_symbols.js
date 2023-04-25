// symbol is an ES6 primitive data type
// used mainly for creating unique IDs

const id = Symbol();


const courseInfo = {
    title: 'JavaScript',
    topics: ['strings', 'arrays', 'objects'],
    id: 'js-course'
};

courseInfo[id] = 12345; // note: courseInfo[id] is not the same as courseInfo['id']

console.log(courseInfo);
console.log(courseInfo[id]);
console.log(courseInfo['id']);