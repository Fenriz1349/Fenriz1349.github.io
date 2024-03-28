import LanguageItem from './LanguageItem';
import jsonData from '../data/data.json'; 
import swiftLogo from "../assets/swiftLogo.png";
import pythonLogo from "../assets/pythonLogo.png";
import kotlinLogo from "../assets/kotlinLogo.png";
import javascriptLogo from "../assets/javascriptLogo.png";
import sqlLogo from "../assets/sqlLogo.png";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import typescriptLogo from "../assets/typescriptLogo.png";
import "../styles/LanguageList.css"; 

function LanguagesList() {
  return (
    <div className="language-list">
      {jsonData.languages.map(Language => (
        <LanguageItem
          key={Language.name}
          logo={getLogo(Language.name)}
          name={Language.name}
          logo2={cssLogo}
          linkGithub={Language.linkGithub}
          linkCertif={Language.linkCertif}
        />
      ))}
    </div>
  );
}

function getLogo(LanguageName) {
    switch (LanguageName) {
      case 'Swift':
        return swiftLogo;
      case 'Python':
        return pythonLogo;
      case 'Kotlin':
        return kotlinLogo;
      case 'Javascript':
        return javascriptLogo;
      case 'SQL':
        return sqlLogo;
      case 'HTML5 et CSS3':
        return htmlLogo;
      case 'TypeScript':
        return typescriptLogo;
      default:
        return null;
    }
  }
export default LanguagesList;