import "../styles/JobItem.css"; 

function JobItem({logo, name,business,dateBegin,dateEnd }) {
    return (
      <div className="job-item">
        <div className="job-top">
          <img src={logo} alt={name} className="logo" />
          <h4>{name}</h4>
        </div>
        <p><strong>{business}</strong> </p>
        { dateEnd !== "" ? (
        <p>{dateBegin} - {dateEnd}</p>
        ) :(
          <p>{dateBegin}</p>
        )
        }
      </div>
    );
  }
    
export default JobItem