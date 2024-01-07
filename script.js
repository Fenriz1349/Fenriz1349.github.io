//recuperation des données depuis le fichier data
const reponse = await fetch('data.json');
const data = await reponse.json();
const langue = true

//fonction pour créer un lien hypertext
function creerLien(parent,info){
       const lien = document.createElement("a");
       lien.href=info;
       lien.innerText=info;
       lien.target="_blank"
       parent.appendChild(lien);
}
//fonction pour créer un lien mail
function creerMail(parent,info){
       const lien = document.createElement("a");
       lien.href="mailto:"+info;
       lien.innerText=info;
       lien.target="_blank"
       parent.appendChild(lien);
}
//fonction pour remplir le poste en fonction de la langue choisie
function genererPoste(langue){
       const poste = document.getElementById("poste");
       poste.innerText=langue ? data.francais.poste : data.english.poste;
}
//fonction pour générer la zone contact
function genererContact(langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = langue ? data.francais.contact : data.english.contact;
       //on recupere la section contact
       const sectionContact = document.querySelector(".contact");
       const titre =document.createElement("h2");
       titre.innerText="contact";
       sectionContact.appendChild(titre);
       //création de la liste des competences
       const contactListe = document.createElement("ul");
       sectionContact.appendChild(contactListe)
       for (let i = 0; i < contenu.length; i++) {
           //peuplement de la liste
           const contact = document.createElement("li");
           const cle = Object.keys(contenu[i])[0];
           const valeur =Object.values(contenu[i]);
           const info = data.informations[cle]
           if (info.substr(0,4)==="http"){
              contact.innerText=`${valeur} : `;
              creerLien(contact,info);
           }else if(cle==="mail"){
              contact.innerText=`${valeur} : `;
              creerMail(contact,info);
           }else{
              contact.innerText=`${valeur} : ${info}`;}
           contactListe.appendChild(contact)       
        }

}
//fonction pour générer le paragraphe sur les competences numérique
function genererCompetences(data,langue){
       const contenu = data.francais;
       //on recupere la section competences
       const sectionCompetences = document.querySelector(".competences");
       //création du titre de la section
       const titreCompetence = document.createElement("h2");
       titreCompetence.innerText = langue ? contenu.titreCompetence : data.english.titreCompetence
       sectionCompetences.appendChild(titreCompetence)
       //création de la liste des competences
       const competenceListe = document.createElement("ul");
       sectionCompetences.appendChild(competenceListe)
       for (let i = 0; i < contenu.competences.length; i++) {
           //peuplement de la liste
           const competence = document.createElement("li");
           competence.innerText=contenu.competences[i].nom;
           competenceListe.appendChild(competence)       
        }

}
//fonction pour générer le paragraphe sur les expériences Pro
function genererExperience(data,langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = langue ? data.francais : data.english;
       //on recupere la section experiences
       const sectionExperiences = document.querySelector(".experiences");
       //création du titre de la section
       const titreExperiences = document.createElement("h2");
       titreExperiences.innerText = contenu.titreExperience
       sectionExperiences.appendChild(titreExperiences)
       for (let i = 0; i < contenu.experiences.length; i++) {
              //peuplement des expériences
              const experience = document.createElement("div");
   
              const titreExperience = document.createElement("h3")
              titreExperience.innerText=contenu.experiences[i].nom;
              experience.appendChild(titreExperience);
              
              const anneeExperience = document.createElement("h4")
              anneeExperience.innerText=`${contenu.experiences[i].dateDebut} - ${contenu.experiences[i].dateFin}`;
              experience.appendChild(anneeExperience);
   
              const entrepriseExperience = document.createElement("p")
              entrepriseExperience.innerText=contenu.experiences[i].entreprise;
              experience.appendChild(entrepriseExperience);
          
              sectionExperiences.appendChild(experience);
           }

}

//fonction pour générer le paragraphe sur les diplomes et formations
function genererFormation(data,langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = langue ? data.francais : data.english;
       //on recupere la section formation
       const sectionFormation = document.querySelector(".formations");
       //création du titre de la section
       const titreFormation = document.createElement("h2");
       titreFormation.innerText = contenu.titreFormation
       sectionFormation.appendChild(titreFormation)

       for (let i = 0; i < contenu.formations.length; i++) {
           //peuplement de la formation
           const diplome = document.createElement("div");

           const titreDiplome = document.createElement("h3")
           titreDiplome.innerText=contenu.formations[i].nom;
           diplome.appendChild(titreDiplome);
           
           const anneeDiplome = document.createElement("h4")
           anneeDiplome.innerText=contenu.formations[i].annee;
           diplome.appendChild(anneeDiplome);

           const centreDiplome = document.createElement("p")
           centreDiplome.innerText=contenu.formations[i].centre;
           diplome.appendChild(centreDiplome);
       
          sectionFormation.appendChild(diplome);
        }
}
function genererBoutonVersion(langue){
       const boutonVersion = document.querySelector(".btn-version");
       langue? boutonVersion.innerText="English" :boutonVersion.innerText="Français";
       boutonVersion.addEventListener("click", function () {
           langue=!langue;
           document.getElementById("poste").innerText="";
           document.querySelector(".contact").innerHTML="";
           document.querySelector(".competences").innerHTML="";
           document.querySelector(".experiences").innerHTML="";
           document.querySelector(".formations").innerHTML="";
           genererPoste(langue);
           genererContact(langue);
           genererCompetences(data,langue);
           genererFormation(data,langue);
           genererExperience(data,langue);
           langue? boutonVersion.innerText="English" :boutonVersion.innerText="Français";
       });
}
genererBoutonVersion(langue);
genererPoste(langue);
genererContact(langue);
genererCompetences(data,langue);
genererFormation(data,langue);
genererExperience(data,langue);