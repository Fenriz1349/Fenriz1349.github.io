import jsonData from '../data/data.json';
import backendDev from '../assets/backendDev.jpg'
import "../styles/Intro.css"; 
import SoftSkillsList from './SoftskillList';

function Intro() {
    return (
    <div className='intro' id='aboutMe'>
        <h3>About me</h3>
        <div className='intro-content'>
            <img src={backendDev}/> 
            <p dangerouslySetInnerHTML={{ __html: jsonData.francais.intro }}></p>
        </div>
        <h3>Soft Skills</h3>
        <div className='sofskills'>
        <SoftSkillsList />
        </div>
    </div>
    );
}

export default Intro;