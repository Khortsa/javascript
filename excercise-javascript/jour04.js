//excercise1//
let cat = {
    name: "Garfeild",
    age: 3,
    isCute: true
};
console.log(cat);
if (cat.isCute){
    console.log("So Cute !");
}
//excercise2//
let cat2 = {
    name: "Coco",
    age: 1,
    isCute: false
};

let cats = [cat, cat2];
console.log(cats);


console.log(cats[0].age);

console.log(cats[1].isCute);

//excercise3//
function checkIfEven (num){
    if(num%2 ===0){
        console.log("even");
    } else{
        console.log("odd") ;
    } 
}

checkIfEven(105);
checkIfEven(30);
checkIfEven(333327625);

//excercise4//
function compare(num1, num2){
if(num1 > num2){
    console.log(num1 + " " + "is bigger");
} else if (num1 < num2){
    console.log(num2 + " " + "is bigger");
} else {
    console.log("both are the same");
}
}
compare(125, 4344);
compare(12, 43);
compare(41, 9);

//excercise5//
function addUp(num){
    let total = 0;
    for(let i=0; i<= num; i++) { 
        total = total + i;
        console.log(total);
    } 
}
addUp(12);

//excercise//
function format(num){
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    console.log(num % 3600);
    return hours + " " + minutes + " " + seconds 
}
format(3700);