//excercise1//
function formatDate (myDate){
    var date = new Date (myDate);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
   


    console.log(day+ "/" + month + "/" +  year);

   
}
formatDate("2022-02-01");

//excercise2//

const calculateAge = (dateOfBirth) => {
    const dob = new Date (dateOfBirth);
    const year= dob.getFullYear() - dateOfBirth;
    const today = new Date ();
      console.log(today);

    console.log(year);
}
calculateAge("2000");

//excercise3//
var prompt = require("prompt");

prompt.start();  // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return;
}

prompt.get(["username", "email"], function (err, res) {  // demande à obtenir les propriétés "username" et "email"
  if (err) {
		return onErr(err);
	}

  console.log("Données reçues :");
  console.log("=> Username : " + res.username); // affiche le résultat pour la propriété "username"
  console.log("=> Email : " + res.email); // affiche le résultat pour la propriété "email"
});



//3//
var prompt = require('prompt');
const schema = {
  properties: {
    email: {
      pattern
    }
  }




}



//['email', 'username', 'password']

prompt.get(schema, (err,res) => {
if (err){
  console.log('error');
  return;
}
});

