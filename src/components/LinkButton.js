import "../styles/LinkButton.css"; 
import githubWhiteLogo from "../assets/githubWhiteLogo.png"
import openclassroomsLogo from "../assets/openclassroomsLogo.png"

function LinkButton({ link, socialName }) {
    const handleClick = () => {
      window.open(link, '_blank');
    };
  
    return (
      <button className="linkButton" onClick={handleClick}>
        {socialName === "GitHub" ? (
            <>
            <img src={githubWhiteLogo} alt={socialName} className="logoButton" />
            <p>Voir sur {socialName}</p>
            </>
        ):(
            <>
            <img src={openclassroomsLogo} alt={socialName} className="logoButton" />
            <p>{socialName}</p>
            </>
        )
        }
      </button>
    );
  }

    
export default LinkButton