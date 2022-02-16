//excercise1//
const fs = require("fs");

fs.readFile("jour07.txt", function (err, data) {
    if (err) { console.error(err);
        return;
    }
    console.log("exchanging information : " + data.toString());
});


//excercise2//
const array1= [1,2,3,4,5];
const double = array1.map((num) => num * 2);
console.log(double);

//excercise3//
const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map(function(name) {
    return name;
  });

console.log(shortNames);

//excercise4//
const array = [1, "toto", 34, "javascript", 8]
const numbers = array.filter(
    function(element){
        if(typeof (element)==="number"){
            return element;
        }
    }
);

console.log(numbers);

//excercise5//
let numbers1 = [1,2,3,4,5,6,7,8]
let even = numbers1.filter(function(element)
{
    if (element === "even"){
        return element;
    }
});
console.log(even);

//excercise6//
const cake = [
{
    name: "cake",
    flavor: "vanilla",
    status: "available"
},
{
    name: "brownie",
    flavor: "chocolate",
    status: "available"
},
{
    name: "pie",
    flavor: "strawberry",
    status: "available"
},
{
    name: "muffin",
    flavor: "pistachio",
    status: "available"
},
{
    name: "donut",
    flavor: "chocolate",
    status: "available"
},
];
const filteredCakes = cakes.filter((cake) => {
    return cake.falvor === 'chocolate';
});
console.log(filteredCakes); 