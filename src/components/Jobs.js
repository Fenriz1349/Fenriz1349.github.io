import jsonData from '../data/data.json';
import "../styles/Diplomas.css"; 
import JobList from './JobList';

function Jobs() {
    return (
    <div className='jobs' id='jobs'>
        <h3>{jsonData.francais.titreExperience}</h3>
        <JobList />
    </div>
    );
}

export default Jobs;