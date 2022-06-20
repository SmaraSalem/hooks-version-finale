import React from 'react'
import MovieCard from './MovieCard';
import '../components/Moviecard.css';


function MovieList(props) {

  const { movies } = props ;


  return (
    <>
    {movies.length === 0 ? 
        <h2 className='pasmovie'>Pas de movies avec ce titre</h2> 
        : 
        movies.map ( e => (
            <MovieCard element={e}/> 
        ))
    }
    </>
  )
}

export default MovieList