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

function calculateAge (dateOfBirth){
    let dob = new Date ();
    let year= dob.getFullYear() - dateOfBirth;

    console.log(year);
}
calculateAge("2000");



