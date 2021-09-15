// Create a replica of map method

function funct(x)
{
    return x * 2;
}

function myMap(arr,funct)
{
    let a = [];
    for(let i=0;i<arr.length;i++)
    {
       a.push(funct(arr[i])); 
    }
    return a;
}

let a = [1,2,3,4,5];
console.log(myMap(a,funct));