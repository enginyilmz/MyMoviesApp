import React from 'react';
import {useState} from 'react';
import MoviesApi from '../../api/moviesApi';
const SearchBar = ({setMovies, setTitle}) => {
const [text, setText] = useState('');
const handleSearchButtonClick=()=>{
    search();
};

const handleKeyPress = (e)=>{
    if(e.which ===13){
        search();
    }
};

const search = async ()=>{
    let res = await MoviesApi.get(
        "/search/movie?api_key=253dbfc1ebb925662d2a20780980c50c&language=tr-TR&page=1&include_adult=false&query=" +
        text
    );
    setMovies(res.data.results);
    setTitle('Your results...')
};
    return (
        <div className="row">
            <div className="col-md-12">
                <input 
                type="search" 
                className="form-control mt-3" placeholder="Search movie..." 
                value={text}
                onChange={(e)=>setText(e.target.value)}
                onKeyPress={(e)=>handleKeyPress(e)}
                />
            </div>
            <div className="col-md-12 mt-3">
                <div className="d-grid gap-2">
                    <button 
                    type="button" 
                    className="btn btn-dark"
                    onClick={(e)=>handleSearchButtonClick()}> 
                    Search</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
