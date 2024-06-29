
function Card(props){
    return (
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="Jeffrysam" />
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    );

}

export default Card