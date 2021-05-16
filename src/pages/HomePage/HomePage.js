import React from 'react';
import { useState, useEffect } from 'react';
import MoviesApi from '../../api/moviesApi';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
        async function fetchData() {
            let res = await MoviesApi.get(
                "/movie/popular?api_key=253dbfc1ebb925662d2a20780980c50c&language=en-EN&page=1"
            );
            setMovies(res.data.results);
            setTitle('Popular Movies');
        }
        fetchData();
    }, []);
    return (
        <div className="container">
            <SearchBar setMovies={setMovies} setTitle={setTitle} />
            <MovieList movies={movies} title={title} />
        </div>
    );
}
export default HomePage;
