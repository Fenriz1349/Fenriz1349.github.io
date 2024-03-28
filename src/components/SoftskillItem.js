import "../styles/SoftskillItem.css"; 

function SoftSkillItem({ name, logo, content }) {
    return (
      <div className="softskill-item">
        <img src={logo} alt={name} className="logo" />
        <h4>{name}</h4>
        <p>{content}</p>
      </div>
    );
  }
    
export default SoftSkillItem