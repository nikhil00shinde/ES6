let a = [1,2,3,4,5];

//for single skip
let [someVar,nextVar,_,reqVar] = a;

console.log(someVar);
console.log(nextVar);
console.log(reqVar);


// for multiple skip
let [someVar1 , , , ,reqVar1] = a;
console.log(someVar1);
console.log(reqVar1);


// for small array this is used not for big array 