// ... -> spread operator 
// it works on array and objects
// ... -> spread operator simply bracket khatam kar deta hain


//  Array
let a = [1,2,3];
let b = [4,6];

let c = [...a,...b];

console.log(a);
console.log(b);
console.log(c);


// OBJECT

let o1 = {a:1,b:2};
let o2 = {c:3};

let o3 = {...o1,...o2};

console.log(o1);
console.log(o2);
console.log(o3);
