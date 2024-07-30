function foo(res,callback){
    console.log(`Hello ${res} welcome to JS`);
    callback()
}
function bar(){
    console.log("Iam call back function");
}

foo("rose",bar);

