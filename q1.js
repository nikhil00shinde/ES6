// let a = [1,2,4,5];
// let b = ?
//form b using slice and spread operator ==> [1,2,,3,4,5]


let a = [1,2,4,5];

let b = [...a.slice(0,2) ,3,...a.slice(2,4)];







console.log(b);




// --------------------------------------
//My Approach


// function sum(a,b)
// {
//     return a+b;
// }
// let a = [1,2,4,5];

// let t1 = a.slice(0,2);
// let t2 = a.slice(2,4);

// let b = [...t1,t1.reduce(sum),...t2];
// console.log(b);
