Interview Question

1- Diff b/w Let and Var
Variables declared with var are hoisted to the top of their global or local scope, which makes them accessible before the line they are declared.
Here's an example:

For Var
a= 50;
var a
console.log(a) // 50

For Let
a=50
let a
console.log(a) // Cannot access 'a' before initialization

2- Pure Functions in JavaScript
Pure functions are those functions which returns the same output if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
Here is an Example:

function calculateGST(productPrice) {
return productPrice \* 0.05;
}
calculateGST(15)

3- Arrow Functions in JavaScript
-Arrow functions reduce the size of the code.
here is syntax:
const Add = ()=>{}

-The return statement and function brackets are optional for single-line functions.
const Add = ( x, y, z ) => {
console.log( x + y + z )
}
Add( 10, 20, 30 );

-Arrow functions provide a lexical this binding. Arrow functions were created to simplify function scope and make using the ‘this’ keyword much more straightforward.
here is example of "this" in Es5

this is the method in which a function ShowTasks has a keyword "this"
var bunny = {
name: 'hamza',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function() {
this.tasks.forEach(function(task) {
console.log((this.name + " wants to " + task));
});
}};
bunny.showTasks();

Output
// [object Window] wants to transform
// [object Window] wants to eat cake
// [object Window] wants to blow kisses

Why does ‘this’ bind to the window object? Because ‘this’, always references the owner of the function it is in, for this case — since it is now out of scope — the window/global object.

How to solve this problem in Es5

Use bind to attach the ‘this’ keyword that refers to the method to the method’s inner function.
var bunny = {
name: 'hamza',
tasks: ['transform', 'eat cake', 'blow kisses'],
showTasks: function() {
this.tasks.forEach(function(task) {
console.log((this.name + " wants to " + task));
}.bind(this));
}};
bunny.showTasks();

Output:
// hamza wants to transform
// hamza wants to eat cake
// hamza wants to blow kisses

(https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/)

4- What is Closure in Javascript

A closure is an inner function that has access to the outer function's variables and parameters. It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.

Closures are important in JavaScript because they allow for information hiding and encapsulation.
To create a closure in JavaScript, you need to define a function inside another function and return the inner function.
Here's an example:

function outerFunction() {
var outerVariable = "Hello, ";
function innerFunction(name) {
console.log(outerVariable + name);
}
return innerFunction;
}
var inner = outerFunction();
console.log(inner)
inner("Hamza"); // Output: "Hello, Hamza"

5- JavaScript Destructruing
Allows you to extract values from Arrays and Objects and assign them to varaiables using a concise syntax
Here is examples:
const myArray = [1,2,3]
const [a,b,c] = myArray
console.log(a,b,c) // Output: 1 2 3

const myObj = {name: "Hamza", age: 23}
const {name, age}
console.log(name , age) Output: // Hamza 27

-skipping items in array possible in destrcuting
what if we want to get only the first and last item of array
here is exapmle:

let intro = ["Hello", "I" , "am", "Hamza"];
let [greeting,,,name] = intro;
console.log(greeting);//"Hello"
console.log(name);//"Hamza"

6- Spread Operator
The spread operator was introduced in ES6. It provides you with the ability to expand iterable objects into multiple elements.
Here is exapmle:

The most common use is probably combining arrays. If you ever had to do this in the times before the spread operator, you probably used the concat() method.
const shapes = ["triangle", "square", "circle"];
const objects = ["pencil", "notebook", "eraser"];
const chaos = shapes.concat(objects);
console.log(chaos);  
 Output : //[ 'triangle', 'square', 'circle', 'pencil', 'notebook', 'eraser' ]

That’s not too bad, but what the spread operator offers is a shortcut, which makes your code look way more readable too
const chaos = [...shapes, ...objects];
console.log(chaos)
Output : //[ 'triangle', 'square', 'circle', 'pencil', 'notebook', 'eraser' ]

7-Rest Parameter
You can think of the rest parameter as the opposite of the spread operator. Just as the spread operator allows you to expand an array into its individual elements, the rest parameter lets you bundle elements back into an array.
Here is example:
const movie = ["Life of Brian", 8.1, 1979, "Graham Chapman", "John Cleese", "Michael Palin"];const [title, rating, year, ...actors] = movie;
console.log(title, rating, year, actors);  
Output: “Life of Brian”, 8.1, 1979, [“Graham Chapman”, “John Cleese”, “Michael Palin”]

7-Callback Function:
A callback function is a function that is passed as an argument to another function,
8-Higher-order function:
A function that accepts other functions as arguments is called a higher-order function
Here is example:

function createQuote(quote, callback){
var myQuote = "Like I always say, " + quote;
callback(myQuote);
}

function logQuote(quote){
console.log(quote);
}

createQuote("eat your vegetables!", logQuote);

9- Callback Hell and Why use Promise:  
 ES6 introduced promises as a native implementation. Before ES6 we were using callbacks to handle asynchronous operations.
Here is Example:

const posts = [
{ post_id: 1, post_title: 'First Post' },
{ post_id: 2, post_title: 'Second Post' },
{ post_id: 3, post_title: 'Third Post' },
];

const comments = [
{ post_id: 2, comment_id: 1, comment: 'Great!'},
{ post_id: 2, comment_id: 2, comment: 'Nice Post!'},
{ post_id: 3, comment_id: 3, comment: 'Awesome Post!'},
];

const getPost = (id, callback) => {
const post = posts.find( post => post.post_id === id);
if(post) {
callback(null, post);
} else {
callback("No such post", undefined);
}
};

const getComments = (post_id, callback) => {
const result = comments.filter( comment => comment.post_id === post_id);
if(result) {
callback(null, result);
} else {
callback("No comments found", undefined);
}
}

getPost(2, (error, post) => {
if(error) {
return console.log(error);
}
console.log('Post:', post);
getComments(post.post_id, (error, comments) => {
if(error) {
return console.log(error);
}
console.log('Comments:', comments);
});
});

After executing the above code, you will see the following output:

Post: { post_id: 2, post_title: 'Second Post' }
Comments: [
{ post_id: 2, comment: 'Great!' },
{ post_id: 2, comment: 'Nice Post!' }
]

Now imagine if we also wanted to find the likes of those comments. That would also get nested inside getComments callback, creating more nesting. This will eventually make the code difficult to understand.

This nesting of the callbacks is known as callback hell.

So to fix this problem and allow asynchronous operations, promises were introduced.
Here is example fixed uses Promises
const posts = [
{ post_id: 1, post_title: 'First Post' },
{ post_id: 2, post_title: 'Second Post' },
{ post_id: 3, post_title: 'Third Post' },
];

const comments = [
{ post_id: 2, comment_id: 1, comment: 'Great!'},
{ post_id: 2, comment_id: 2, comment: 'Nice Post!'},
{ post_id: 3, comment_id: 3, comment: 'Awesome Post!'},
];

const getPost = (id) => {
return new Promise((resolve, reject) => {
const post = posts.find(post => post.post_id === id);
if (post) {
resolve(post);
} else {
reject("No such post");
}
});
};

const getComments = (post_id) => {
return new Promise((resolve, reject) => {
const result = comments.filter(comment => comment.post_id === post_id);
if (result.length > 0) {
resolve(result);
} else {
reject("No comments found");
}
});
};

getPost(2)
.then(post => {
console.log('Post:', post);
return getComments(post.post_id);
})
.then(comments => {
console.log('Comments:', comments);
})
.catch(error => {
console.error(error);
});
