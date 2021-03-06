function App() {
    const [movies, setMovies] = useState(dummyMovies);
    
    function fetchMoviesHandler() {
      fetch('https://swapi.dev/api/films').then(
        response => {
          return response.json();
        }
      ).then((data) => {
        const transformedMovies = data.results.map(movie => {
          return {
            id: movie.episode_id,
            title: movie.title,
            openingText: movie.opening_crawl,
            releaseDate: movie.release_date
          }
        })
        setMovies(transformedMovies);
      });
    };
  
    return (
      <React.Fragment>
        <section>
          <button onClick={fetchMoviesHandler}>Fetch Movies</button>
        </section>
        <section>
          <MoviesList movies={movies} />
        </section>
      </React.Fragment>
    );
  }