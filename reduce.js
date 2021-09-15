// method defined on array
// input -> which takes input as function with only 2 argument
// output -> return a single value

let a = [1,2,3];

function sum(a,b)
{
    return a+b;
}

let reducedAns = a.reduce(sum);

console.log("Before");
console.log(a);
console.log(reducedAns);




// --------------------------

// myReduce

function myReduce(arr,f)
{
    let ans = arr[0];

    for(let i=1;i<arr.length;i++)
    {
        ans = f(ans,arr[i]);
    }
    return ans;
}
console.log("After");
console.log(myReduce(a,sum));
