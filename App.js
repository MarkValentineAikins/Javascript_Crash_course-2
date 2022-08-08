function sum(x,y) // function and identifier or function name 
{ 
let total = x+y;
return total;
    //console.log(x+y);
    //return x+y
}
let a = sum(9,12); //assigning result of a function to a variable
let b = sum(2,56);
let c = sum(45,46);

console.log(c);

//Multiplicaton function with default values

function multiply(a=0,b=0){

    let m = a*b;
    return m;
}

let x = multiply(45);
let y = multiply(3,56);
console.log(y);

// LOOPS

// for loop

for (let i = 1; i <=10; i++){
    console.log(i);
}

for(let i = 0; i<=10; i=i+1){
    console.log(i + "I will code everyday");
}

for (i =0; i<=20; i=i+2)
{
    console.log(i);
}

// while loop

let asst = 1;
while (asst<=10){
    console.log(asst);

    asst = asst + 1;
}

// Do While loop

let age =1;
do {
    console.log(age + "You can't code");
    age++;
}
while(age <18);

//ARRAY METHODS

/* let day ={Monday:19, Tuesday:18, Wednesday:26, Thurdays:14, Friday:34, Saturday:25, Sunday:36};
for(day in days){
    console.log(num);
} */

let ages =[19, 18, 26, 14, 34, 25, 36, 37, 38];
for(age of ages){
    console.log(Math.pow(age, 2));
}

//FILTERS : select a range of item from array

let marriage = ages.filter((num) => num >25);
console.log(marriage);

/* let marriage = ages.filter(function(mark)){
    return mark >25;
}; */

console.log(marriage);


// Map

let squares =ages.map((age) => Math.pow(age, 2));
console.log(squares);

// FIND : look one item in an array

let m = ages.find((age)=>age ===26);
console.log(m);



