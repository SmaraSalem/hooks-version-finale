import { useState } from "react";


import StarRatingComponent from "react-star-rating-component";

function MovieSearch({ movies, setMovies }) {


const [valuerating,setValuerating]=useState(0)


const search = (e) => {
  let arr = movies.filter((el) =>
    el.title.toUpperCase().includes(e.target.value.trim().toUpperCase())
  );
  setMovies(arr);
  
};
 



  


  const surStarClick=(rating) =>{
    let arr1 = movies.filter((e) => e.rating === rating.toString());
    setValuerating(rating)
    setMovies(arr1);
  }

  return (
    <div>
      <h2>SearchMovie </h2>
      <input type="text" placeholder="movie title" onChange={search} />

      <div style={{ fontSize: 50 }}>
        <StarRatingComponent
          name="rate"
          starCount={7}
          value={valuerating}
          onStarClick={surStarClick.bind(this)}
        />
    

        
    
      </div>
    </div>
  );
}

export default MovieSearch;
