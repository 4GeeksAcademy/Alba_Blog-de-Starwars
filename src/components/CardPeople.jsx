import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            {/* Cambié el src de la imagen a la URL proporcionada por la profesora */}
            <img 
                src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${people.uid}.jpg`} 
                className="card-img-top" 
                alt={people.name} 
                style={{ height: "300px", objectFit: "cover" }} // Opcional: Ajuste de imagen
            />
            <div className="card-body">
                <h5 className="card-title">{people.name}</h5>
                <Link to={`/character/${people.uid}`} className="btn btn-primary">
                    Learn More
                </Link>
            </div>
        </div>
    );
};