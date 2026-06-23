import { Link } from "react-router-dom";

export const CardPeople = ({ people }) => {
  return (
    <div className="card h-100 shadow-sm" style={{ width: "18rem" }}>
      
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
        className="card-img-top"
        alt={people.name}
        onError={(e) => {
          e.target.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
      />

      <div className="card-body text-center">
        <h5 className="card-title">{people.name}</h5>

        <Link
          to={`/people/${people.uid}`}
          className="btn btn-primary w-100"
        >
          VER INFO
        </Link>
      </div>
    </div>
  );
};