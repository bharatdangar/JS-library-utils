//Custom Ease // opacity 600ms cubic-bezier(0.15, 0.3, 0.2, 0.9), transform 600ms cubic-bezier(0.15, 0.3, 0.2, 0.9), top 600ms cubic-bezier(0.15, 0.3, 0.2, 0.9)


//💡 Variables
//=============================================
var x = 5;
let y = "Hello";
const z = true;


//💡 Data Types
//=============================================
let num = 5;              // number
let str = "Hello";        // string
let bool = true;          // boolean
let arr = [1,2,3];        // array
let obj = {name: "John", age: 30}; // object
let n = null;             // null
let u = undefined;        // undefined


//💡 Operators
//=============================================

let a = 5;
let b = 10;
let c = a + b;           // addition
let d = a - b;           // subtraction
let e = a * b;           // multiplication
let f = a / b;           // division
let g = a % b;           // modulus
let h = a ** b;          // exponentiation
let i = a++;             // increment
let j = b--;             // decrement
let k = a > b;           // greater than
let l = a < b;           // less than
let m = a == b;          // equal to
let n = a != b;          // not equal to
let o = a && b;          // logical and
let p = a || b;          // logical or
let q = !a;              // logical not



//💡 Conditional Statements
//=============================================

if (condition) {
// code to execute if condition is true
} else if (condition) {
// code to execute if condition is true
} else {
// code to execute if all conditions are false
}

//💡 Loops
//=============================================

/* For Loop */ 

for (let i = 0; i < 10; i++) {
// code to execute repeatedly
}

/* While Loop */ 

while (condition) {
// code to execute repeatedly while condition is true
}

/* DO While Loop */ 

do {
// code to execute repeatedly at least once, then check condition
} while (condition);


//💡 Functions
//=============================================

function functionName(param1, param2, ...) {
// code to execute
return result;
}


//💡 Arrays + Methods
//=============================================

let arr = [1,2,3,4,5];
let len = arr.length;           // length of array
let first = arr[0];             // first element
let last = arr[arr.length - 1]; // last element
arr.push(6);                    // add element to end
arr.pop();                      // remove element from end
arr.unshift(0);                 // add element to beginning
arr.shift();                    // remove element from beginning
arr.splice(2, 0, "Hello");      // add element at index 2
arr.splice(3, 1);               // remove 1 element from index 3
let newArr = arr.slice(1, 4);   // create new array from index 1 to 3
let str = arr.join(", ");       // convert array to string
let numArr = arr.map(x => x * 2);  // create new array by applying function to each element
let filteredArr = arr.filter(x => x > 3); // create new array with elements that pass condition
let sum = arr.reduce((acc, val) => acc + val, 0); // reduce array to single value


//💡 Promises
//=============================================

function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        // code to execute asynchronously
        if (success) {
            resolve(result); // resolve with result
        } else {
            reject(error);   // reject with error
        }
    });
}

someAsyncFunction()
    .then(result => {
        // code to execute on success
    })
    .catch(error => {
        // code to execute on error
    });


//💡 Classes
//=============================================

class MyClass {
    constructor(param1, param2, ...) {
      this.property1 = param1;
      this.property2 = param2;
      // code to execute on instantiation
    }

    method1() {
        // code to execute
    }

    method2() {
        // code to execute
    }

}

let myInstance = new MyClass(value1, value2, ...);
myInstance.method1();  // call method on instance


//💡 Modules
//=============================================

// file: myModule.js
export function myFunction() {
    // code to execute
}

export class MyClass {
    // code to execute
}

// file: main.js
import { myFunction, MyClass } from "./myModule.js";

myFunction();     // call exported function
let myInstance = new MyClass(); // create instance of exported class



//💡 Objects
//=============================================


// Creating Objects
// There are two ways to create objects in JavaScript: using object literals and using the Object() constructor.

// Using object literal
let obj1 = {
    key1: "value1",
    key2: 2,
    key3: true
};

// Using Object constructor
let obj2 = new Object();
obj2.key1 = "value1";
obj2.key2 = 2;
obj2.key3 = true;



// Accessing Object Properties
// Object properties can be accessed using dot notation or bracket notation.

let obj = {
    key1: "value1",
    key2: 2,
    key3: true
};

let value1 = obj.key1;     // using dot notation
let value2 = obj["key2"];  // using bracket notation



// Modifying Object Properties
// Object properties can be modified using dot notation or bracket notation.

let obj = {
    key1: "value1",
    key2: 2,
    key3: true
};

obj.key1 = "new value";    // using dot notation
obj["key2"] = 3;           // using bracket notation


// Adding Object Properties
// New properties can be added to an object using dot notation or bracket notation.

let obj = {
    key1: "value1",
    key2: 2,
    key3: true
};

obj.key4 = "new value";    // using dot notation
obj["key5"] = 3;           // using bracket notation



// Looping Through Object Properties
// Object properties can be looped through using a for...in loop.

let obj = {
    key1: "value1",
    key2: 2,
    key3: true
};

for (let key in obj) {
    console.log(key + ": " + obj[key]);    // code to execute on each iteration
}

