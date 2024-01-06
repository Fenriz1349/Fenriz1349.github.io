//recuperation des données depuis le fichier data
const data = require("./data.json");
console.log(data)
//const data =  reponse.json();
function age(){

       const affichageAge = document.getElementById("age");
       const maintenant =  new Date();
       //var naissance = new Date(data.informations.dateNaissance);

      // var totalSecondes = ( maintenant-naissance) / 1000;

       //affichageAge.innerText = Math.floor(totalSecondes / (60*60*24*365.25));
       }
age();