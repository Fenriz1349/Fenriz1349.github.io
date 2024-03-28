import "../styles/PortfolioItem.css"; 
import LinkButton from "./LinkButton";

function PortfolioItem({ screenshot, name, frameworks, content,link }) {
    return (
      <div className="portfolio-item">
        <img src={screenshot} alt={name} className="screenshot" />
        <h4>{name}</h4>
        <p><strong>Frameworks/langages : {frameworks}</strong></p>
        <p>{content}</p>
        <LinkButton 
            link={link}
            socialName="GitHub"
        />
      </div>
    );
  }
    
export default PortfolioItem