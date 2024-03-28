import logo from "../assets/logoJC.jpg";
import mail from "../assets/mailLogo.png";
import phone from "../assets/phoneLogo.png"
import github from "../assets/githubLogo.png";
import linkedin from "../assets/linkedinLogo.png";
import codewars from "../assets/codewarsLogo.png";
import "../styles/Banner.css";
import jsonData from '../data/data.json';

function Banner() {
  
  return (
    <div className="banner">
      <a href="#"><img src={logo} alt="La maisonjungle" className="logoBanner"/></a>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#languages">{jsonData.francais.titreLanguage}</a>
          </li>
          <li>
            <a href="#frameworks">Frameworks</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#diplomas">{jsonData.francais.titreFormation}</a>
          </li>
          <li>
            <a href="#jobs">{jsonData.francais.titreExperience}</a>
          </li>
        </ul>
      </nav>
      <div className="social-banner">
        <div>
         <a href={`tel:${jsonData.informations.telephone}`}><img src={phone} className="logo" /></a>
         {/* <p>{jsonData.informations.telephone}</p> */}
        </div>
        <div>
         <a href={`mailto:${jsonData.informations.mail}`}><img src={mail} className="logo" /></a>
        </div>
        <div>
         <a href={jsonData.informations.github} target="_blank"><img src={github} className="logoSocial" /></a>
        </div>
        <div>
           <a href={jsonData.informations.linkedin} target="_blank"><img src={linkedin} className="logoSocial" /></a>
         </div>
        <div>
          <a href={jsonData.informations.codewars} target="_blank"><img src={codewars} className="logoSocial" /></a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
