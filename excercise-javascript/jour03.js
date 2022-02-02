//excercise1//
var fruits = ["mango", "lemon" , "bluberry"];
console.log(fruits);
console.table(fruits);

//excercise2//
let ingredients= ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));



//excercise3//
let objects = ["pen", "book", "lamp"];
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

//exercise4//
let numbers = [4, 10, 8, 12, 6];
numbers.reverse();
console.log(numbers);
numbers.sort();
console.log(numbers);


//excercise5//
let total = 0;
let limit = 10;
 for (var i = 0; i <= limit; i++){
    total = total + i;
    console.log(total);
 }

 //excercise6//
 let sentence = "Hello Konexio !";
 for (let i = sentence.length -1; i >=0; i --){
     console.log(sentence[i]);
 }


 //Bonus1//
 for (let i = 0; i <=100; i++)
 if(i % 3 === 0){
     console.log('fizz');
 } else if (i % 5 === 0) {
     console.log('buzz');
 } else if(i % 3 && i % 5 === 0){
     console.log('fizzbuzz');
 } else if(i % 7 === 0) {
     console.log();
 } else{
    console.log(i);
 }



//  Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
// À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
// Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
 
 //Bonus2//
 let totally = 0;
 let limitted = 10;
 let i = 0;
while (i<= limitted){
    totally = totally + i;
   console.log(totally);
   i++;

}