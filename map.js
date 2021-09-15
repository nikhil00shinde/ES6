let a = [1,2,3,4,5];

function double(x)
{
    return 2 * x;
}

let ans = a.map(double);

console.log(a);
console.log(ans);

// No change in original array
// 1. Loop marega array 'a' ke upar
// 2. Har element pr double call krega 
// 3. Sare double function ke answer ek arrary me dalega 


//Map is method defined on array
// function defined on array
// when function is defined on something we call it method


// Map it will work on Array
// it take input as function
// and return output as array


// When we perform mathematical operation on string it give NaN (not a number)
// let s = "some string";
// let k = s * 2;
// k => NaN