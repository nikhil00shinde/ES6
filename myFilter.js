// Create a replica of filter method

function funct(x)
{
    return x%2 == 0;
}

function myFilter(arr,funct)
{
    let a = [];
    for(let i=0;i<arr.length;i++)
    {
      if(funct(arr[i]))
       a.push(arr[i]); 
    }
    return a;
}

let a = [1,2,3,4,5];
console.log(myFilter(a,funct));