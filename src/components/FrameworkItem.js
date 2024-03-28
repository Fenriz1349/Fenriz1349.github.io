import "../styles/LanguageItem.css"; 
import LinkButton from "./LinkButton";

function FrameworkItem({ logo,name,linkGithub,linkCertif }) {
    return (
      <div className="language-item">
        <div className="top-section">
          <img src={logo} alt={name} className="logo" />
          <h4>{name}</h4>
        </div>
        <div className="bottom-section">
        {linkGithub !== "" && <LinkButton 
            link={linkGithub}
            socialName="GitHub"
        />}
          {linkCertif !== "" && <LinkButton 
            link={linkCertif}
            socialName="Openclassrooms"
        />}
        </div>
      </div>
    );
  }
    
export default FrameworkItem