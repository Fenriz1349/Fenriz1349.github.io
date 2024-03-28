import jsonData from '../data/data.json';
import "../styles/Language.css"; 
import LanguageList from './LanguageList';
import FrameworkList from './FrameworkList';

function Language() {
    return (
    <div className='languages' id='languages'>
        <h3>{jsonData.francais.titreLanguage}</h3>
        <LanguageList />
        <h3 id='frameworks'>{jsonData.francais.titreFramework}</h3>
        <FrameworkList />
    </div>
    );
}

export default Language;