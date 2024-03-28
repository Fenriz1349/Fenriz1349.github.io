import JobItem from './JobItem';
import jsonData from '../data/data.json';
import barLogo from '../assets/barLogo.png';
import meatLogo from "../assets/meatLogo.png";
import foodLogo from "../assets/foodLogo.png";
import bToBLogo from "../assets/bToBLogo.png";
import truckLogo from "../assets/truckLogo.png";

import "../styles/JobList.css"; 

function JobList() {
  return (
    <div className="job-list">
      {jsonData.francais.Jobs.map(Job => (
        <JobItem
          key={Job.name}
          logo={getLogo(Job.name)}
          name={Job.name}
          business={Job.business}
          dateBegin={Job.dateBegin}
          dateEnd={Job.dateEnd}
        />
      ))}
    </div>
  );
}
function getLogo(name) {
  switch (name) {
    case "Préparateur de commandes" :
      return foodLogo;
    case "Boucher" :
      return meatLogo;
    case "Brand Promoter" :
      return bToBLogo;
    case "Apprenti Chauffeur Routier" :
      return truckLogo;
    default:
      return  barLogo;
  }
}

export default JobList;