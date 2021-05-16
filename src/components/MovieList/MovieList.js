import { Link } from "react-router-dom";
const MovieList = ({ movies, title }) => {
    return (
        <>
            <p className="h1">{title}</p>
            <div className="row row-cols-1 row-cols-md-2">
                {movies.map((movie, index) => {
                    return (
                        <div key={index} className="col mb-3">
                            <div className="card h-100">
                                <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" +
                                    movie.poster_path}
                                    className="card-img-top" alt={movie.title} />
                                <div className="card-header">
                                    <h5 className="card-title my-card-title ">{movie.title}</h5>
                                </div>
                                <div className="card-body ">
                                    <p className="card-text">{movie.overview}</p>
                                </div>
                                <div className="card-bottom">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Vote: {movie.vote_average}</li>
                                        <li className="list-group-item"> Date: {movie.release_date}</li>
                                        <li className="list-group-item">Popularity: {movie.popularity}</li>
                                    </ul>
                                    <div className="card-footer">
                                        <Link to={"/movieDetails/" + movie.id} className='btn btn-dark'>
                                            Go to Details
                </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default MovieList;
