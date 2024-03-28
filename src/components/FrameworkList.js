import FrameworkItem from './FrameworkItem';
import jsonData from '../data/data.json'; 
import swiftuiLogo from "../assets/swiftuiLogo.png";
import reactLogo from "../assets/reactLogo.png";
import pandasLogo from "../assets/pandasLogo.png";
import githubLogo from "../assets/githubLogo.png";
import apiLogo from "../assets/apiLogo.png";
import "../styles/LanguageList.css"; 

function FrameworkList() {
  return (
    <div className="language-list">
      {jsonData.frameworks.map(framework => (
        <FrameworkItem
          key={framework.name}
          logo={getLogo(framework.name)}
          name={framework.name}
          linkGithub={framework.linkGithub}
          linkCertif={framework.linkCertif}
        />
      ))}
    </div>
  );
}

function getLogo(frameworkName) {
    switch (frameworkName) {
      case 'SwiftUI':
        return swiftuiLogo;
      case 'React':
        return reactLogo;
      case 'Numpy/ Pandas/ Matplotlib/ Seaborn':
        return pandasLogo;
      case 'Git et Github':
        return githubLogo;
      case 'API Rest':
        return apiLogo;
      default:
        return null;
    }
  }
export default FrameworkList;