/*let num = 50;

while(i <=200){
    

if(num % 2 === 0){
    console.log(num);
} 
    num++;
}*

//excercise2//
let dice = null;
let count = 0;


let min = 1;
let max = 6;

dice = Math.floor(Math.random() * (max - min + 1) + min); */



//excercise3//
let ussainBolt = 0;
let tysonGay = 0;

let min = 1;
let max = 10;

while(ussainBolt <= 100 && tysonGay <100){
    let ussain = Math.floor(Math.random() * (max - min + 1) + min);
    let tyson = Math.floor(Math.random() * (max - min + 1) + min);

   /*ussainBolt = ussain + ussainBolt;
    tysonGay = + tyson + tysonGay;*/
    ussainBolt += ussain;
    tysonGay += tyson;
}
if (ussainBolt > 100){
    console.log("Winner Usain");
} else if (tysonGay > 100){
    console.log("Winner Tyson");
} else if(ussainBolt > 100 || tysonGay > 100){
    console.log("Both wins");
}

else {
    console.log("Both failed");
}

