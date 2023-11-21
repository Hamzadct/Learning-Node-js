

// Interview Question 

const { error } = require("console");

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

            const posts = [
                { post_id: 1, post_title: 'First Post' },
                { post_id: 2, post_title: 'Second Post' },
                { post_id: 3, post_title: 'Third Post' },
              ];
              
              const comments = [
                { post_id: 2, comment: 'Great!'},
                { post_id: 2, comment: 'Nice Post!'},
                { post_id: 3, comment: 'Awesome Post!'},
              ];

              const getPost = (id, callback) => {
                const post = posts.find( post => post.post_id === id);
                if(post) {
                  callback(null, post)
                } else {
                  callback("No such post found", undefined);
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



// for avoiding Callback hell Es6 introduce Promise 

   const getPost1 = (id) => {
    return new Promise((resolve, reject) => {
      const post = posts.find(post => post.post_id === id);
      if (post) {
        resolve(post);
      } else {
        reject("No such post");
      }
    });
  };

  const getComments1 = (post_id) => {
    return new Promise((resolve, reject) => {
      const result = comments.filter(comment => comment.post_id === post_id);
      if (result.length > 0) {
        resolve(result);
      } else {
        reject("No comments found");
      }
    });
  };
  
  getPost1(2)
  .then(post => {
    console.log('Post:', post);
    return getComments1(post.post_id);
  })
  .then(comments => {
    console.log('Comments:', comments);
  })
  .catch(error => {
    console.error(error);
  });

// const promise = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//      const sum = 4 + 5 + 'a'; 
//      if(isNaN(sum)){
//         reject("error while calculating")
//      }else{
//          resolve(sum);
//      }
//     }, 2000);
//    }).then(function(result){
//     console.log(result)
//    }).catch(function(error){
//     console.log(error)
//   })
// console.log(promise)

