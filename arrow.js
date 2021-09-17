function fn1(x,y)
{
    console.log("Some process");
    return x+y;
} 


let fa1 = (x,y) =>{
    console.log("Some process");
    return x+y;
}

// ---------------------------------------------

function fn2(x)
{
    console.log("Some process");
    return 2 * x;
}

// if we have only one argument then we don't have to use bracket for ARGUMENT
let fa2 = x =>{
    console.log("Some process");
    return 2 * x;
}

// ---------------------------------------------

function f3(x)
{
    return 2 * x;
}


//if there only one statement that is return statement inside the function then we don't have to use bracket for function and return keyword
let fa3 = x => 2 * x;






















//GOLDEN RULE :- React mei Normal function use nhi karna hain ARROW FUNCTION USE KARNA HAIN