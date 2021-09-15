// filter is method of array
// in input it take some array -> this work on condition
// and return array only those answer whose condition is true


let a = [1,2,3,4,5];

function isEven(x)
{
    return x%2==0;
}

let filteredAns = a.filter(isEven);


console.log(a);

console.log(filteredAns);

console.log(a.map(isEven));