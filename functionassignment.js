

// --------------handson1.js-----------------
console.log("--------------handson1.js-------");

const student={
    name:"jonny",
    marks:80 }
    console.log(student.name+" "+student.marks);
    if(student.marks>50){
        
        console.log("pass")}
    else{
        console.log("fail")
    }

// --------------handsson2.js-----------------
console.log("--------------handson2.js-------");
for (let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}

// --------------handson3.js-----------------
console.log("");
const studentdetails={
    name:"jonny",
    age:25,
    grade:"A",
    city:"New York"};
    
const favoriteSubjects=["Math","Science","History","telugu","english"];

console.log("Student Details:");
for (let key in studentdetails){
    console.log(`${key}:${studentdetails[key]}`);
}
for (let subject of favoriteSubjects){
    console.log(`Favorite Subject:${subject}`);
}


// ------------------functions------------------
// Greeting Function
console.log("--------------Greeting Function-------");
function greet(name){
    return "hello "+name;
}
console.log(greet(" badri"));

const greet1=name=> "hello"+name;
console.log(greet1(" badri"));

// even or odd checker
console.log("--------------even or odd-------");
function number(num){
    if(num%2==0){
        console.log("Even");
    }else{
        console.log("odd");
    }
}
number(20);
number(71);

const number1=num=> num%2==0 ? "Even" : "odd";
console.log(number1(20));
console.log(number1(71));




console.log("--------------square-------");
function square(num){
    return num*num;
}

console.log(square(5));

const square1=num=>num*num;
console.log(square1(5));



console.log("--------------largest of two numbers-------");

// largest of two numbers
function largestnumber(a,b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log(largestnumber(30,20));


const largestnumber1=(a,b)=> a>b ? a:b;
console.log(largestnumber1(30,20));