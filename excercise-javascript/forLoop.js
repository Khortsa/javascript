//excercise1//
let total = 0;
for(i=5; i<= 10; i++){
    total = i * i + total;
}
console.log(total);

//excercise2//
let total1 = 0;
for (i = 100; i<= 1000; i++){
    if(i%7===0){
        total1 = total1 + 1;  
    }
} console.log(total1);

//excercise3//
let total2 = 0;
let max = 6;
let min = 1;


for(i=0; i <=20; i++){
    var diceRoll = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(diceroll);//

    
  if(diceRoll >=  5){
    console.log(diceRoll);
    total2 = diceRoll + total2;
  
}
}
console.log(total2);

