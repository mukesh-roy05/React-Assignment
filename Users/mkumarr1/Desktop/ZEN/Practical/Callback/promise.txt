Promise:
A  promise is a Object Which Holds the result of Asynchronous Operation
Syntax:var variable_name = new Promise();
inside the Promise Object we have a function
var variable_name = new Promise((resolve,reject)=>{})

here Promises has 3 states
1.pending
2.Fullfilled
3.rejected


var p1 =  new Promise((resolve,reject)=>{
    reject("this is rejected")
    resolve("this is resolved");
    
});
console.log(p1);


var p1 =  new Promise((resolve,reject)=>{
  var age = parseInt(prompt("Enter the age!!"));
  if(age>=18){
    resolve("You are eligible to Vote!!")
  }
  else{
    reject("You are Not Eligible to Vote!!!")
  }
    
});
console.log(p1);


To access the value Inside the Promise Object
we use .then(()=>{}) and .catch(()=>{})

.then() is used when you have the resolved state
.catch() is used when you have the rejected state

 function foo(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(["guvi","geek"]),3000)
    })
 }


 function bar(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject("This is rejected!!"),3000)
    })
 }
 var res = bar();
 res.then((data)=>console.log(data)).catch((error)=>console.log(error))

 Chain Of Promises

 function foo(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(5 * num), 3000)
    })
}

function bar(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>reject(15*num),4000)
    })
}
foo(5).then((data) => {
    console.log(data);
    return foo(data);
}).then((data1) => {
    console.log(data1);
    return bar(data1);
}).then((data2) => console.log(data2)).catch((error)=>console.log(error))

Handling the Multiple Promises:
Promise.all
var p1 =  new Promise((resolve,reject)=>{
    if(5>4){
        setTimeout(()=>resolve("This is a p1 resolved"),3000)
    }
    else{
        setTimeout(()=>reject("This is p1 rejected"),4000)
    }
});

var p2 =  new Promise((resolve,reject)=>{
    if(5<4){
        setTimeout(()=>resolve("This is a p2 resolved"),4000)
    }
    else{
        setTimeout(()=>reject("This is p2 rejected"),5000)
    }
});


var p3 =  new Promise((resolve,reject)=>{
    if(5>4){
        setTimeout(()=>resolve("This is a p3 resolved"),5000)
    }
    else{
        setTimeout(()=>reject("This is p3 rejected"),2000)
    }
});

// p1.then((data)=>console.log(data)).catch((error)=>console.log(error));
// p2.then((data1)=>console.log(data1)).catch((error)=>console.log(error));
// p3.then((data2)=>console.log(data2)).catch((error)=>console.log(error));
// Promise.all
// It takes the array of Promises and it Will Wait Untilll all the promises
// are getting resolved
// Promise.all([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
// The Output will be a array of resolved promises

// The disadvantages of this method is , if one of the promises are rejected
// then we will get only those promise which are rejected

//To overcome above
// we have the Promise.allSettled()
Promise.allSettled([p1,p2,p3]).then((data)=>console.log(data)).catch((error)=>console.log(error));
//This Provides  the Array of Output
// Which Consist of both resolved and rejected state
