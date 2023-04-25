const person = {
    name: 'Angie',
    hobbies: ['bike', 'hike', 'ski'],
    printHobbies: function() {
        this.hobbies.forEach(function(hobby) {
            console.log(`${this.name} likes to ${hobby}`);
            // this.name is not in the scope of the inner function
            // and evaluates to undefined
        });
    }
};

person.printHobbies();

// ---------------------------
console.log('*'.repeat(25));
// Workaround using a variable to save this

const person1 = {
    name: 'Angie',
    hobbies: ['bike', 'hike', 'ski'],
    printHobbies: function() {
        const _this = this; // create a variable to keep a reference to this
        
        this.hobbies.forEach(function(hobby) {
            console.log(`${_this.name} likes to ${hobby}`);
        });
    }
};

person1.printHobbies();

// ---------------------------
console.log('*'.repeat(25));
// Workaround using arrow function to access outer function this

const person3 = {
    name: 'Angie',
    hobbies: ['bike', 'hike', 'ski'],
    printHobbies: function() {
        this.hobbies.forEach(hobby => {
            // in arrow function this refers to the outer function this
            console.log(`${this.name} likes to ${hobby}`);
        });
    }
};

person3.printHobbies();