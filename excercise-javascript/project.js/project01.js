//1ststep//
var prompt = require("prompt");
prompt.start();



    function onErr(err) { 
        console.log(err);
        return;     

    }
    prompt.get('command', function (err, res){
        if(err){
            return onErr;
        } pilotRover(res.command);

    });

var grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];
let rover = {
    direction: "N",
    y: 0,
    x: 0,
    travelLog: [],
    
};
//2ndstep//
let turnLeft = (rover) => {

    if(rover.direction === 'N') {
        rover.direction = 'W';
    } else if (rover.direction === 'W'){
        rover.direction = 'S';
    } else if (rover.direction === 'S'){
        rover.direction = 'E';
    } else if (rover.direction === 'E'){
        rover.direction = 'N';
    } else {
        console.log('error');
    }
  
};



 let turnRight = (rover) => {
    if(rover.direction === 'N') {
        rover.direction = 'E';
    } else if (rover.direction === 'E'){
        rover.direction = 'S';
    } else if (rover.direction === 'S'){
        rover.direction = 'W';
    } else if (rover.direction === 'W'){
        rover.direction = 'N';
    } else {
        console.log('error');
    }

    };
   
    

//3rdstep is to add in other areas so, its done//





//4thstep//
const moveForward = (rover) => {
    if(rover.direction === 'N') {
        rover.y--;
    } else if (rover.direction === 'E'){
        rover.x++;
    } else if (rover.direction === 'S'){
        rover.y++;
    } else if (rover.direction === 'W'){
        rover.x--;
    } else {
        console.log('error');
    } 
   
};


//5thstep//

const pilotRover = (success) => {
    for(i =0; i<success.length; i++){
        if(success.charAt(i) === "r"){
            turnRight(rover);
        } else if (success.charAt(i) === "l"){
            turnLeft(rover);
        } else if(success.charAt(i) === "f"){
            moveForward(rover);
        } else{
            console.log('error');
        } rover.travelLog.push({y: rover.y, x: rover.x});
    }
    console.log(rover);
}


//6thstep//







