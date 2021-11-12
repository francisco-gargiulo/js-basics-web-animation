# JavaScript basics (plus animation)

## Introduccion
Why JavaScript? JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.

## First step
Clone or download the repository used on this course.

## Variable declarations
JavaScript has three kinds of variable declarations.

### var
- Globally scoped
- Can be redeclarated
- Can be updated
- Hoisted

````javascript
var a = 10;
console.log(a);  // output 10

if (true) {
    var a = 20;
    console.log(a); // output 20
}

console.log(a);  // output 20
````

### let
- Block scoped
- Cannot be redeclarated
- Can updated

````javascript
let a = 10;
console.log(a);  // output 10

if (true) {
    // var a = 20; // SyntaxError
    let a = 20; // OK
    console.log(a) // output 20
}

a = 30;
console.log(a); // output 30
````

### const
- Block scoped
- Cannot be updated
- Cannot be redeclarated


````javascript
const a = 10;
console.log(a);  // output 10

if (true) {
    // var a = 20; // SyntaxError
    const a = 20; // OK
    console.log(a) // output 20
}

a = 30; // Error: Assignment to constant variable.
console.log(a);
````

## Data types

### **Primitive data types**:
These seven types are considered to be primitives. A primitive is not an object and has no methods of its own. All primitives are immutable.

- Boolean. true and false.
- null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
- undefined. A top-level property whose value is not defined.
- Number. An integer or floating point number. For example: 42 or 3.14159.
- BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
- String. A sequence of characters that represent a text value. For example: "Howdy"
- Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.

### **Object**:
A collection of properties identified by using key-value pair.

## Functions
In JavaScript, functions are first-class objects, because they can have properties and methods just like any other object. What distinguishes them from other objects is that functions can be called. In brief, they are Function objects.

### Function declaration

#### Named function
````javascript
function square(number) {
  return number * number;
}

console.log(square(2)); // 4
````

Functions can also be created by a function expression.
#### Anonymous function
````javascript
const square = function(number) { 
    return number * number 
};

console.log(square(4)) // x gets the value 16
````

### Arrow function
An arrow function expression has a shorter syntax compared to function expressions and does not have its own this, arguments, super, or new.target. Arrow functions are always anonymous

#### Anonymous function
````javascript
const square = (number) => { 
    return number * number 
};

console.log(square(4)) // x gets the value 16
````

### What is "**this**"?
It has different values depending on where it is used:

- In a method, this refers to the owner object.
- Alone, this refers to the global object.
- In a function, this refers to the global object.
- In a function, in strict mode, this is undefined.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.

#### In an object method, this refers to the "owner" of the method.
````javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // John Doe
````

#### bind() and apply()
````javascript
const person = {
    fullName: function (lastName) {
        return this.firstName + " " + lastName;
    }
}

const person1 = {
    firstName: "John",
}

console.log(person.fullName.apply(person1, ["Doe"]));
console.log(person.fullName.call(person1, "Doe"));
````

## Events
Events are actions or occurrences that happen in the system you are programming, which the system tells you about so you can respond to them in some way if desired. For example, if the user selects a button on a webpage, you might want to respond to that action by displaying an information box.

There are many different types of events that can occur. For example:

- The user selects a certain element or hovers the cursor over a certain element.
- The user chooses a key on the keyboard.
- The user resizes or closes the browser window.
- A web page finishes loading.
- A form is submitted.
- A video is played, paused, or finishes.
- An error occurs.

Each available event has an event handler, which is a block of code (usually a JavaScript function that you as a programmer create) that runs when the event fires. When such a block of code is defined to run in response to an event, we say we are registering an event handler. Note: Event handlers are sometimes called event listeners — they are pretty much interchangeable for our purposes, although strictly speaking, they work together. The listener listens out for the event happening, and the handler is the code that is run in response to it happening.

#### Event onLoad example
```javascript
<html>
  <head>
    <script>
       // run this function when the document is loaded
       window.onload = function() {
           console.log("Hi");
      }
    </script>
  </head>
  <body>
  </body>
</html>
```

## DOM Object
The DOM (Document Object Model) is an interface that represents how your HTML and XML documents are read by the browser. It allows a language (JavaScript) to manipulate, structure, and style your website. After the browser reads your HTML document, it creates a representational tree called the Document Object Model and defines how that tree can be accessed.

```javascript
// create a couple of elements in an otherwise empty HTML page
const heading = document.createElement("h1");
const heading_text = document.createTextNode("Big Head!");
heading.appendChild(heading_text);
document.body.appendChild(heading);
```

## Let's have fun: Animated frame

### Web Animations API
The Web Animations API allows for synchronizing and timing changes to the presentation of a Web page, i.e. animation of DOM elements. It does so by combining two models: the Timing Model and the Animation Model.

> _"Photography is truth. The cinema is truth twenty-four times per second."_
> Jean-Luc Godard

#### Element.animate()
````javascript
  document.getElementById('mario-sprite').animate([{
    // keyframes
    transform: 'translateX(0)'
  }, {
    transform: 'translateX(-100%)'
  }], {
    // options
    delay: 100,
    easing: 'steps(3, end)',
    direction: "reverse",
    playbackRate: 1,
    duration: 500,
    iterations: Infinity
  });
````

## Reference
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://www.w3schools.com/js/default.asp
- https://developer.mozilla.org/en-US/docs/Web/API/Element/animate

## Next steps
- https://andreasbm.github.io/web-skills
