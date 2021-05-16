import './MovieDetails.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import MoviesApi from "../../api/moviesApi";
const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    let { id } = useParams();

    useEffect(() => {
        async function fetchData(){
            let res = await MoviesApi.get(`/movie/${id}?api_key=253dbfc1ebb925662d2a20780980c50c&language=en-US`);
            setMovie(res.data);
        }
        fetchData();
    }, []);

    if (!movie) {
        return (<div>
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>);

    }
    return (

        <div className="container">
            <div className='row g-0'>
                <div className='col-md-12'>
                    <div className="h1">{movie.original_title} </div>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face" +
                        movie.poster_path} className="img-fluid" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{movie.tagline}</h5>
                        <p className="card-text">{movie.overview}</p>
                        <p className="card-text"><small className="text-muted">{`${movie.status} : ${movie.release_date}`}</small></p>
                    </div>
                </div>
                <div className="row">
                    <a href={movie.homepage} className="btn btn-dark mt-3" target="_blank" rel="noreferrer">Watch Now</a>
                </div>

            </div>
        </div>
    );
}

export default MovieDetails;
