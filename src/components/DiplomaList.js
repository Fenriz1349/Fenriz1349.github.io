import DiplomaItem from './DiplomaItem';
import jsonData from '../data/data.json'; 
import appleLogo from '../assets/appleLogo.png';
import dataAnalystLogo from '../assets/dataAnalystLogo.png';
import meatLogo from "../assets/meatLogo.png";
import laptopLogo from '../assets/laptopLogo.png';
import scienceLogo from "../assets/scienceLogo.png";
import truckLogo from "../assets/truckLogo.png";
import "../styles/DiplomaList.css"; 

function DiplomaList() {
  return (
    <div className="diploma-list">
      {jsonData.francais.diplomas.map(diploma => (
        <DiplomaItem
          key={diploma.name}
          logo={getLogo(diploma.name)}
          name={diploma.name}
          school={diploma.school}
          year={diploma.year}
          city={diploma.city}
        />
      ))}
    </div>
  );
}

function getLogo(name) {
  switch (name) {
    case 'MS Data Analyst' :
    case "DUT STID(Statistique et Traitement Informatique des Données)":
      return dataAnalystLogo;
    case "CAP Boucher" :
      return meatLogo;
    case "La Nurserie Numerique" :
      return laptopLogo;
    case "BAC Scientifique" :
      return scienceLogo;
    case "Titre Pro Transport Routier" :
      return truckLogo;
    default:
      return  appleLogo;
  }
}
export default DiplomaList;