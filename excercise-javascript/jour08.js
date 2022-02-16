var request = require("request");

//excercise1//
const countriesNames = [];



    request.get('https://restcountries.com/v3.1/all', function (err, res, body) {
        const result = JSON.parse(body);
        // console.log(typeof body);
        // console.log(typeof result);
        // console.log(Array.isArray(result));
        // console.log(typeof result)

        function getCountries(){
            for(let i = 0; i< result.length; i++){
                countriesNames.push(result[i].name.common);
            }
        }
        getCountries();
        
        console.log(countriesNames.join(' - '));
    });

//excercise2//
// const getFact = () => {
//     const url = 'https://api.chucknorris.io/jokes/random'
//     request.get(url, (err, res, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(JSON.parse(data).value);
//     })
// }

//excercise3//
const catchPokemon = (id) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id ;
    console.log(url);

    request.get(url, (err, res, body) = () => {
        if(err){
            console.log(err);
            return;
        }
        console.log(body);
        const pokemon = JSON.parse(body);
        console.log(pokemon);
        console.log(pokemon.name);
    });
};
catchPokemon(Math.random() * (800 - 0 +));







/*function getCountries(){
    request.get( "https://restcountries.com/v3.1/all", function (err, res, body) {
            var result = JSON.parse(body);
            console.log(result);
        });
        
        console.log("#3");
};
getCountries();*/


