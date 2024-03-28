import "../styles/Portfolio.css"; 
import PortfolioList from "./PortfolioList";


function Portfolio() {
    return (
    <div className='Portfolio' id="portfolio">
        <h3>Portfolio</h3>
       <PortfolioList />
    </div>
    );
}

export default Portfolio;