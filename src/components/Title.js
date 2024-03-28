import jsonData from '../data/data.json';
import "../styles/Title.css"; 

function Title() {
  return (
    <div className='title'>
     <h1>Julien Cotte</h1>
     <h2>{jsonData.francais.poste}</h2>
    </div>
  );
}

export default Title;