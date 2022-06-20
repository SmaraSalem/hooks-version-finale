import React from "react";
import "../components/Moviecard.css";
import StarRatingComponent from "react-star-rating-component";

function MovieCard(props) {
  const { element } = props;
  return (
    <>
      <div className="card">
        <div>
          
          <img
            src={element.posterURL}
            style={{ width: "200px" }}
            alt="nwe movie"
          />
        </div>
        <div>
          
          <p>{element.title}</p>
          <p>{element.description}</p>
          <p>{element.rating}</p>


          <StarRatingComponent
          name="rate1"
          starCount={7}
          value={element.rating}/>

          
        </div>
        
      </div>
    </>
  );
}

export default MovieCard;
