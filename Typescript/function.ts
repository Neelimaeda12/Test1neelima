//scenario - 1- non parametrised and non returning function example 
///
function greet()
{
console.log("hello , welcome to typescript");
}
greet()

// scenario 2. non - parametrised and returning function
 
function greetings()
{
    return "welcome to typescript" // retrun should be 
    // the last statement of the function //
    
}
greetings()/// if you execute this it wont print because its not returning anyting 
let result = greetings()  // this is to return the values 
console.log(result);

//scenario 3 

function print(){
    console.log(greet() + "PW");
}

print()

// parametrised and non-returning function

function add(a:number, b:number)
{
    console.log(a+b);
}

add(10,30)

// 4. parametrised and returning function //curly bases comes only when you define a fun
function addition(a:number, b:number) :number{
    return a+b
}   

let sum1 = addition(10,200)
console.log("line # 43: " +sum1)