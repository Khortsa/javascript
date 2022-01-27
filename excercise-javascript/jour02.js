//excersie1//
var integer =102;
var float = 13.9;
console.log(integer, float);

//excercise2//
let basic = 34;
let stringified = basic.toString();
console.log(stringified, 'is a', typeof basic);

//excercise3//
let num= 1.5;
let rounded = Math.round(num);
console.log(rounded);

//excercise4//
let test = 12;
let bis = 5;

console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis);
console.log(test % bis);

//excercise5//
let test1 = 143;
let bis1 = 219;

console.log(test1 > bis1);
console.log(test1 < bis1);
console.log(test1 >= bis1);
console.log(test1 <= bis1);
console.log(test1 == bis1);
console.log(test1 === bis1);
console.log(test1 != bis1);
console.log(test1 !== bis1);

//excercise6//
let limit = 50;
let score = 64;
if (score >= limit){
    console.log("Ok good !");
} else {
    console.log("Oh nooo...");
}

//excercise7//
let password = "azerty";
if (password.length > 5){
    console.log("The password is secure");
}

//excercise8//
if (score >= limit && password.length <= 5){
    console.log("Everything is good");
} else if (score >= limit || password.length <= 5){
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}
//Bonus//
let random = Math.random;

if (random === 6){
    console.log("Yes i win");
} else{
    console.log("So, close");
}

//Bonus2//
let month ="January"

switch (month) {
    case "Decembre":
    case "January":
    case "Febuary":
        console.log("Winter");
		break;
	case "March":
    case "April":
    case "May":
		console.log("Spring");
		break;
	case "Juin":
    case "July":
    case "August":
		console.log("Summer");
		break;
	 
    case "September":
    case "October":
    case "November":
        console.log("Fall");
		break;
    
	default: 
		console.log("That's not a season...");
}

//Bonus3//
let roundedNumber = 3.6;

