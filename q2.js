// q2. 
// let o1 = {a:1,b:2};
// let o2 = {c:3};
// let o3 = {...o1,...o2,...o1,...o2}
// o3 output ??????



let o1 = {a:1,b:2};
let o2 = {c:3};

let o3 = {...o1,...o2,...o1,...o2};
console.log(o3);


// override the existing key 
let o4 = {...o1,...o2,...{a:100},...o2};
console.log(o4);