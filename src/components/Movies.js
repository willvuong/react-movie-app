import Movie from './Movie.js'

const Movies = ({movies}) => {
    return (
        <div className="movies">
            {movies.length > 0 && movies.map((myMovies) => (
                <Movie key={myMovies.id} movie={myMovies}/>
            ))}

        </div>
    )
}

export default Movies
