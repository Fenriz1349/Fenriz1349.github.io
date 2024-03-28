import PortfolioItem from './PortfolioItem';
import jsonData from '../data/data.json'; 
import cvReactScreenshot from "../assets/cvReactScreenshot.png";
import doItYourPlanScreenshot1 from "../assets/doItYourPlanScreenshot1.png";
import EasyconomyScreenshot from "../assets/EasyconomyScreenshot.png";
import calculatriceScreenshot from "../assets/calculatriceScreenshot.png";
import cvJSScreenshot from "../assets/cvJSScreenshot.png";
import cardfinderScreenshot from '../assets/cardFinderScreenshot.png';
import lotoScreenshot from "../assets/lotoScreenshot.png"
import "../styles/PortfolioList.css"; 


function PortfolioList() {
  return (
    <div className="portfolio-list">
      {jsonData.portfolio.map(portfolio => (
        <PortfolioItem
          key={portfolio.name}
          screenshot={getLogo(portfolio.name)}
          name={portfolio.name}
          frameworks={portfolio.frameworks}
          content={portfolio.content}
          link={portfolio.linkGithub}
        />
      ))}
    </div>
  );
}

function getLogo(screenshot) {
    switch (screenshot) {
      case 'CV en ligne React':
        return cvReactScreenshot;
      case 'DoItYouPlan' :
        return doItYourPlanScreenshot1;
      case 'Easyconomy' :
        return EasyconomyScreenshot;
      case 'Calculatrice' :
        return calculatriceScreenshot;
      case 'CV en ligne JS' :
        return cvJSScreenshot;
      case 'Loto et Python' :
        return lotoScreenshot;
      case 'Cardfinder' :
        return cardfinderScreenshot;
      default:
        return null;
    }
  }
export default PortfolioList;