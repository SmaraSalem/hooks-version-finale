import { useEffect, useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieAdd from "./components/MovieAdd";
import MovieSearch from "./components/MovieSearch.js";
import "./components/Moviecard.css";

function App() {
  const initMovies = [
    {
      title: "El gharnoug",
      description: "filme tuninsiens- artify",
      rating: "4",
      posterURL:
        "https://pictures.artify.tn/media/yosu8cmb7ufutgavj0tk.jpg?width=300&aspect_ratio=2%3A3npm",
    },
    {
      title: "The dark knight",
      description:
        "Batman Excellent movie — watched it in original French with Spanish subtitles",
      rating: "2",
      posterURL:
        "https://fr.web.img4.acsta.net/c_310_420/pictures/22/04/26/13/15/4890195.jpg",
    },
    {
      title: "Delicious - Official Trailer",
      description:
        "Excellent movie — watched it in original French with Spanish subtitles",
      rating: "3",
      posterURL:
        "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
    },
    {
      title: "Mes frères et moi",
      description:
        "Excellent movie — watched it in original French with Spanish subtitles",
      rating: "5",
      posterURL:
        "https://resize1.prod.docfr.doc-media.fr/s/1200/img/var/doctissimo/storage/images/fr/www/famille/activites-enfants/meilleurs-films-netflix-pour-enfants/voyage-centre-terre-2-ile-mysterieuse/8176973-1-fre-FR/Voyage-au-centre-de-la-terre-2-l-ile-mysterieuse.jpg",
    },
  ];

  const [movies, setMovies] = useState(initMovies);

  


  // useEffect(

  //  ()=>{setMovies2(movies)});








  return (
    <>
      <div className="app">
        <div className="inputs">
          <div>
            <MovieSearch movies={movies} setMovies={setMovies}/>
          </div>

          <div>
            <MovieAdd movies={movies} setMovies={setMovies} />
          </div>
        </div>

        <MovieList movies={movies} />
      </div>
     
    </>
  );
}

export default App;
