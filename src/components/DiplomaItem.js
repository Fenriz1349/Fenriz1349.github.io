import "../styles/DiplomaItem.css"; 

function DiplomaItem({logo, name,school,year,city }) {
    return (
      <div className="diploma-item">
        <div className="diploma-top">
          <img src={logo} alt={name} className="logo" />
          <h4>{name}</h4>
        </div>
        <p>en {year} à {school}, {city}</p>
      </div>
    );
  }
    
export default DiplomaItem