//recuperation des données depuis le fichier data
const reponse = await fetch('data.json');
const data = await reponse.json();
let langue="francais";

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
function genererHeader(langue){
       const sectionTitre = document.querySelector(".titre");
       const sectionIntro = document.querySelector(".intro");
       const titre=document.createElement("h1");
       titre.innerText="Cotte Julien";
       const poste = document.createElement("h2");
       poste.innerText=data[langue].poste;
       const intro = document.createElement("p");
       intro.innerText=data[langue].intro;

       sectionTitre.appendChild(titre);
       sectionTitre.appendChild(poste);
       sectionIntro.appendChild(intro);
}
//fonction pour générer la zone contact
function genererContact(langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = data[langue].contact ;
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
function genererCompetences(langue){
       const contenu = data.competences;
       //création du titre de la section
       const titreCompetence = document.getElementById("boutonCompetence");
       titreCompetence.innerText = data[langue].titreCompetence;
       //création de la liste des competences
       const bodyCompetence = document.getElementById("panelCompetences");
       const competenceListe = document.createElement("ul");
       bodyCompetence.appendChild(competenceListe)
       for (let i = 0; i < contenu.length; i++) {
           //peuplement de la liste
           const competence = document.createElement("li");
           const logo = document.createElement("img");
           logo.src=contenu[i].logo;
           //logo.alt= contenu[i].nom+" logo";
           logo.className="logo";
           competence.appendChild(logo);
           const texte= document.createElement("span");
           texte.innerText=contenu[i].nom;
           competence.appendChild(texte);
           if (contenu[i].lienGithub != "") {
            const lien=document.createElement("a")
            const link = document.createTextNode("Gitbuh "+contenu[i].nom);
            lien.appendChild(link); 
            lien.href = contenu[i].lienGithub;
            lien.target="_blank";
            competence.appendChild(lien);
           }
           if (contenu[i].lienCertif != "") {
            const lien=document.createElement("a")
            const link = document.createTextNode("Certification OpenClassrooms");
            lien.appendChild(link); 
            lien.href = contenu[i].lienCertif;
            lien.target="_blank";
            competence.appendChild(lien);
           }
           competenceListe.appendChild(competence);   
        }

}
//fonction pour générer le paragraphe sur les expériences Pro
function genererExperiences(langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = data[langue].experiences;
       //création du titre de la section
       const titreExperiences = document.getElementById("boutonExperiences");
       titreExperiences.innerText = data[langue].titreExperience;
       const bodyExperiences=document.getElementById("panelExperiences")
       for (let i = 0; i < contenu.length; i++) {
              //peuplement des expériences
              const experience = document.createElement("div");
   
              const titreExperience = document.createElement("h3")
              titreExperience.innerText=contenu[i].nom;
              experience.appendChild(titreExperience);
              
              const anneeExperience = document.createElement("h4")
              anneeExperience.innerText=`${contenu[i].dateDebut} - ${contenu[i].dateFin}`;
              experience.appendChild(anneeExperience);
   
              const entrepriseExperience = document.createElement("p")
              entrepriseExperience.innerText=contenu[i].entreprise;
              experience.appendChild(entrepriseExperience);
          
              bodyExperiences.appendChild(experience);
           }

}
//fonction pour générer le paragraphe sur les diplomes et formations
function genererFormations(langue){
       //on recupere le contenu du json dans la langue selectionnée
       const contenu = data[langue].formations;
       //création du titre de la section
       const boutonFormations = document.getElementById("boutonFormations");
       boutonFormations.innerText = data[langue].titreFormation
       const bodyFormations = document.getElementById("panelFormations")
       for (let i = 0; i < contenu.length; i++) {
           //peuplement de la formation
           const diplome = document.createElement("div");

           const titreDiplome = document.createElement("h3")
           titreDiplome.innerText=contenu[i].nom;
           diplome.appendChild(titreDiplome);
           
           const anneeDiplome = document.createElement("h4")
           anneeDiplome.innerText=contenu[i].annee;
           diplome.appendChild(anneeDiplome);

           const centreDiplome = document.createElement("p")
           centreDiplome.innerText=contenu[i].centre;
           diplome.appendChild(centreDiplome);
       
           bodyFormations.appendChild(diplome);
        }
}
function genererBoutonVersion(langue){
       const boutonInput = document.getElementById("langageSwitchInput");
       const boutonLabel = document.getElementById("langageSwitchLabel");
       boutonLabel.innerText="Français";
       boutonInput.addEventListener("change", function () {
           if (this.checked){
              langue="english";
              boutonLabel.innerText="English";
              document.querySelector(".titre").innerHTML="";
              document.querySelector(".intro").innerHTML="";
              document.querySelector(".contact").innerHTML="";
              document.getElementById("boutonCompetence").innerText="";
              document.getElementById("panelCompetences").innerHTML="";
              document.getElementById("boutonFormations").innerText="";
              document.getElementById("panelFormations").innerHTML="";
              document.getElementById("boutonExperiences").innerText="";
              document.getElementById("panelExperiences").innerHTML="";
              genererHeader(langue);
              genererContact(langue);
              genererCompetences(langue);
              genererFormations(langue);
              genererExperiences(langue);
           }else{
              langue="francais";
              boutonLabel.innerText="Français";
              document.querySelector(".titre").innerHTML="";
              document.querySelector(".intro").innerHTML="";
              document.querySelector(".contact").innerHTML="";
              document.querySelector(".titre").innerHTML="";
              document.querySelector(".intro").innerHTML="";
              document.querySelector(".contact").innerHTML="";
              document.getElementById("boutonCompetence").innerText="";
              document.getElementById("panelCompetences").innerHTML="";
              document.getElementById("boutonFormations").innerText="";
              document.getElementById("panelFormations").innerHTML="";
              document.getElementById("boutonExperiences").innerText="";
              document.getElementById("panelExperiences").innerHTML="";
              genererHeader(langue);
              genererContact(langue);
              genererCompetences(langue);
              genererFormations(langue);
              genererExperiences(langue);
              }
       });
}
function genererBoutonMode(){
       const boutonInput = document.getElementById("colorModeInput");
       const boutonLabel = document.getElementById("colorModeLabel");
       const bodyMode=document.querySelector("body");
       const accordionBodyMode = document.querySelector("div.accordion-body");
       boutonLabel.innerText="dark mode";
       boutonInput.addEventListener("change", function () {
           if (this.checked){
              bodyMode.className="lightMode";
              boutonLabel.innerText="light mode";
              accordionBodyMode.style.color="green"
           }else{
              bodyMode.className="darkMode";
              boutonLabel.innerText="dark mode";
              accordionBodyMode.style.color="red"
           }
       });
}
genererHeader(langue);
genererContact(langue);
genererCompetences(langue);
genererFormations(langue);
genererExperiences(langue);
genererBoutonVersion(langue);
genererBoutonMode();