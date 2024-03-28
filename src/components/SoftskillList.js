import SoftSkillItem from './SoftskillItem';
import jsonData from '../data/data.json'; 
import curiosite from "../assets/curiositeLogo.png";
import organisation from "../assets/organisationLogo.png";
import autodidacte from "../assets/autodidacteLogo.png";
import diplomate from "../assets/diplomateLogo.png";
import versatile from "../assets/versatileLogo.png";
import "../styles/SoftskillList.css"; 

function SoftSkillsList() {
  return (
    <div className="softskills-list">
      {jsonData.francais.softskills.map(skill => (
        <SoftSkillItem
          key={skill.name}
          logo={getLogo(skill.name)}
          name={skill.name}
          content={skill.content}
        />
      ))}
    </div>
  );
}

function getLogo(skillName) {
    switch (skillName) {
      case 'Curiosité':
        return curiosite;
      case 'Organisation':
        return organisation;
      case 'Autodidacte':
        return autodidacte;
      case 'Diplomate':
        return diplomate;
      case 'Polyvalent':
        return versatile;
      default:
        return null;
    }
  }
export default SoftSkillsList;