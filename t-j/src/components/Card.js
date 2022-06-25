import location from "../assets/location.svg";

export default function Card(props) {
  return (
    <div className="card-style">
      <div className="card-img">
        <img src={props.imageUrl} />
      </div>
      <article>
        <div className="card-header">
          <img src={location} />
          <h3>{props.location}</h3>
          <a href={props.googleMapsUrl} target="blank">
            View on Google Maps
          </a>
        </div>
        <div className="card-info">
          <h2>{props.title}</h2>
          <p>
            <span>{props.startDate}</span>-<span>{props.endDate}</span>
          </p>
          <p>{props.description}</p>
        </div>
      </article>
    </div>
  );
}
