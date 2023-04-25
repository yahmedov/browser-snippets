// maps are like objects but their keys could be any tipe of data (objects can have only strings as keys)
// the order of elements in a map is always the same as the order of creation

let course = new Map();

course.set('react', { description: 'ui' });
course.set('jest', { description: 'testing' });

console.log(course);
console.log(course.react); // undefined, cannot access map properties with dot notation

console.log(course.get('react'));

let details = new Map([
    [new Date(), 'today'],
    [2, { javascript: ['js', 'node', 'react'] }],
    ['items', [1, 2]]
]);

console.log(details.size);

details.forEach((item, index) => {
    // index is the key, item is the value
    console.log(index, item);
});
