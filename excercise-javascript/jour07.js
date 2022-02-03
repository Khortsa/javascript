//excercise1//
var fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) { console.error(err);
        return;
    }
    console.log("exchanging information : " + data.toString());
});


//excercise2//
let array1= [1,2,3,4,5];
let double = array1.map((num) => num * 2);
console.log(double);

//excercise3//
let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

let shortNames = longNames.map(function(name) {
    return name;
  });

console.log(shortNames);

//excercise4//
let array = [1, "toto", 34, "javascript", 8]
let numbers = array.filter(
    function(element){
        if(typeof (element)==="number"){
            return element;
        }
    }
);

console.log(numbers);