// for of is used to easily iterate over iterables such as arrays and maps

for (let letter of 'JavaScript') {
    console.log(letter);
}

const topics = ['JavaScript', 'Node', 'CSS'];

for (let topic of topics) {
    console.log(topic);
}

let paths = new Map();

paths.set('HTML', '/path/html');
paths.set('CSS', '/path/css');
paths.set('JavaScript', '/path/javascript');

for (let path of paths) {
    console.log(path);
}

for (let path of paths.entries()) {
    console.log(path);
}

for (let path of paths.keys()) {
    console.log(path);
}

for (let path of paths.values()) {
    console.log(path);
}