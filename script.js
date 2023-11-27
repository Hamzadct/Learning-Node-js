

// Interview Question 

// 1-  Diff b/w Let and Var 

// Variables declared with var are hoisted to the top of their global or local scope, which makes them accessible before the line they are declared. 
// Here's an example:
  
// For Var 

// function calculateGST(productPrice) {
// 	return productPrice * 0.05;
// }
// console.log(calculateGST(15))


// const calculateGSF = (productPrice) =>{
// 	return productPrice * 0.05;
// }
// console.log(calculateGSF(150))

// var bunny = {
//     name: 'hamza',
//     showName: function() {
// console.log(bunny.name)    }
//   };
  
//   bunny.showName(); // hamza


// ES5 
//   var bunny = {
//     name: 'hamza',
//     tasks: ['transform', 'eat cake', 'blow kisses'],
//     showTasks: function() {
//       this.tasks.forEach(function(task) {
//         console.log((this.name + " wants to " + task));
//       });
//     }
//   };
  
//   bunny.showTasks();


//   ES6
//   var bunny = {
//     name: 'hamza',
//     tasks: ['transform', 'eat cake', 'blow kisses'],
//     showTasks() {
//       this.tasks.forEach((task) => {
//         console.log((this.name + " wants to " + task));
//       });  
//     }
//   };
  
//   bunny.showTasks();

// function outerFunction() {
//     var outerVariable = "Hello, ";
//     function innerFunction(name) {
//     console.log(outerVariable + name);
//     }
//     return innerFunction;
//     }
//     var inner = outerFunction();
//     console.log(inner)
//     inner("Hamza"); // Output: "Hello, Hamza"


    // function outer() {

    //     var x = 10;
        
    //     function inner() {
        
    //     console.log(x);
        
    //     }
        
    //     return inner;
        
    //     }
        
        // var innerFunc = outer();
        
        // innerFunc();


        // function outer() {

        //     var x = 10;
            
        //     function inner() {
            
        //     console.log(x);
            
        //     }
            
        //     x = 20;
            
        //     return inner;
            
        //     }
            
        //     var innerFunc = outer();
            
        //     innerFunc();

        // function outer() {

        //     var x = 10;
            
        //     function inner() {
            
        //     var y = 5;
            
        //     console.log(x + y);
            
        //     x = 20;
            
        //     }
            
        //     return inner;
            
        //     }
            
            // var innerFunc = outer();
            
            // innerFunc();
            // innerFunc();


     

            // const shapes = ["triangle", "square", "circle"];
            // const objects = ["pencil", "notebook", "eraser"];
            // const chaos = shapes.concat(objects);
            // const chaos = [...shapes, ...objects]
            // console.log(chaos);


            // const movieData  = ["Life of Brian", 8.1, 1979, "Graham Chapman", "John Cleese", "Michael Palin"];
            // const [title, rating, year, ...actors] = movieData;
            // console.log(title, rating, year, actors);  





            // CallBack Hell 

            // const posts = [
            //     { post_id: 1, post_title: 'First Post' },
            //     { post_id: 2, post_title: 'Second Post' },
            //     { post_id: 3, post_title: 'Third Post' },
            //   ];
              
            //   const comments = [
            //     { post_id: 2, comment: 'Great!'},
            //     { post_id: 2, comment: 'Nice Post!'},
            //     { post_id: 3, comment: 'Awesome Post!'},
            //   ];

            //   const getPost = (id, callback) => {
            //     const post = posts.find( post => post.post_id === id);
            //     if(post) {
            //       callback(null, post)
            //     } else {
            //       callback("No such post found", undefined);
            //     }
            //    };
     
            //    const getComments = (post_id, callback) => {
            //     const result = comments.filter( comment => comment.post_id === post_id);
            //     if(result) {
            //       callback(null, result);
            //     } else {
            //       callback("No comments found", undefined);
            //     }
            //    }

            //    getPost(2, (error, post) => {
            //     if(error) {
            //      return console.log(error);
            //     }
            //     console.log('Post:', post);
            //     getComments(post.post_id, (error, comments) => {
            //         if(error) {
            //           return console.log(error);
            //         }
            //         console.log('Comments:', comments);
            //     });
            // });



// for avoiding Callback hell Es6 introduce Promise 

  //  const getPost1 = (id) => {
  //   return new Promise((resolve, reject) => {
  //     const post = posts.find(post => post.post_id === id);
  //     if (post) {
  //       resolve(post);
  //     } else {
  //       reject("No such post");
  //     }
  //   });
  // };

  // const getComments1 = (post_id) => {
  //   return new Promise((resolve, reject) => {
  //     const result = comments.filter(comment => comment.post_id === post_id);
  //     if (result.length > 0) {
  //       resolve(result);
  //     } else {
  //       reject("No comments found");
  //     }
  //   });
  // };
  
  // getPost1(2)
  // .then(post => {
  //   console.log('Post:', post);
  //   return getComments1(post.post_id);
  // })
  // .then(comments => {
  //   console.log('Comments:', comments);
  // })
  // .catch(error => {
  //   console.error(error);
  // });






  // Async Await Using Callback

  // Create an icecream Cafe 

//   The shop will have two parts:
// The storeroom will have all the ingredients [Our Backend]
// We'll produce ice cream in our kitchen [The frontend]

// Let's store our data
// You can store the ingredients inside objects like this: 👇

  let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };


 //  Customer Order An Ice Cream 
 // Now we have start the Production of Ice cream 


 // Step 1 Let's make our functions
// let order = () =>{};
// let production = () =>{};



//  Step-2 Now, let's establish a relationship between these two functions using a callback, like this: 👇
// let Order = (call_Production) =>{
//   call_Production()
// }
// let production = () =>{};


// Lets do a small test 👇
// let order = (fruitName,call_production) =>{

//   // console.log("Order placed. Please call production")

//   setTimeout(()=>{
//     console.log(`${stocks.Fruits[fruitName]} was selected`)

//      // function is being called 
//      call_production(stocks.Fruits[fruitName]);
//   },2000)
  
 
//   };
  
//   let production = (fruitName) =>{
  
//     setTimeout(()=>{
//       console.log("cutting the",fruitName)
//     setTimeout(()=>{
//       console.log(`The ${fruitName} has been chopped`)
//       setTimeout(()=>{
//         console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
//         setTimeout(()=>{
//           console.log("start the Machine")
//           setTimeout(()=>{
//             console.log(`Select ${stocks.holder[0]}`)
//             setTimeout(()=>{
//               console.log(`${stocks.toppings[0]} as toppings`)
//               setTimeout(()=>{
//                 console.log(`Serve Ice cream`)
//               },2000)
//             },3000)
//           },2000)
//         },1000)
//       },1000)
//     },2000)

//   },1000)
//   };

//   order(0, production)



  // Promises 
  // Promises were invented to solve the problem of callback hell and to better handle our tasks.

  // let is_shop_open = true;
// //   let is_shop_open = false;

// //   let Order =(time , work)=>{
  
// //     return new Promise((resolve , reject)=>{
// //       if(is_shop_open){

// //         setTimeout(()=>{

// //           // work is 👇 getting done here
// //            resolve( work() )

// //    // Setting 👇 time here for 1 work
// //           }, time)


// //       }else{
// //         reject(console.log("Shop is Closed"))
// //       }
// //     })
// //   }

// //   // step 1
// // Order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// // // step 2
// // .then(()=>{
// //   return Order(1000,()=>console.log('production has started'))
// // })

// // // step 3
// // .then(()=>{
// //   return Order(2000, ()=>console.log("Fruit has been chopped"))
// // })

// // // step 4
// // .then(()=>{
// //   return Order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// // })

// // // step 5
// // .then(()=>{
// //   return Order(1000, ()=>console.log("start the machine"))
// // })

// // // step 6
// // .then(()=>{
// //   return Order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// // })

// // // step 7
// // .then(()=>{
// //   return Order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// // })

// // Step 8
// .then(()=>{
//   return Order(2000, ()=>console.log("Serve Ice Cream"))
// })
// .catch(()=>{
//   console.log("Customer left")
// })
// .finally(()=>{
//   console.log("end of day")
// })


// Use Of Async Await 

let is_shop_open = true;

function time(ms) {

   return new Promise( (resolve, reject) => {

      if(is_shop_open){
         setTimeout(resolve,ms);
      }

      else{
         reject(console.log("Shop is closed"))
      }
    });
}


async function kitchen(){
  try{
await time(2000)
console.log(`${stocks.Fruits[0]} was selected`)

await time(1000)
console.log("production has started")

await time(2000)
console.log("fruit has been chopped")

await time(1000)
console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

await time(1000)
console.log("start the machine")

await time(2000)
console.log(`ice cream placed on ${stocks.holder[1]}`)

await time(3000)
console.log(`${stocks.toppings[0]} as toppings`)

await time(2000)
console.log("Serve Ice Cream")
  }

  catch(error){
 console.log("customer left")
  }
}
kitchen();
