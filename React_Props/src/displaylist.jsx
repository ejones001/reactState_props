import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'The Shawshank Redemption', genre: 'Drama', description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.' },
        { id: 2, title: 'The Godfather', genre: 'Crime', description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.' },
        { id: 3, title: 'The Dark Knight', genre: 'Action', description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.' }
    ]);

    const [expandedMovie, setExpandedMovie] = useState(null);
    const [filteredGenre, setFilteredGenre] = useState(null);

    const toggleDescription = id => {
        if (expandedMovie === id) {
            setExpandedMovie(null);
        } else {
            setExpandedMovie(id);
        }
    };

    const removeMovie = id => {
        const updatedMovies = movies.filter(movie => movie.id !== id);
        setMovies(updatedMovies);
        setExpandedMovie(null); // Reset expanded state if movie is removed
    };

    const toggleGenre = genre => {
        setFilteredGenre(genre === filteredGenre ? null : genre);
        setExpandedMovie(null); // Reset expanded state when toggling genre
    };

    return (
        <div>
            <h2>Favorite Movies List</h2>
            <button onClick={() => toggleGenre('Action')}>Toggle Action Movies</button>
            <ul>
                {movies
                    .filter(movie => !filteredGenre || movie.genre === filteredGenre)
                    .map(movie => (
                        <li key={movie.id} onClick={() => toggleDescription(movie.id)}>
                            {movie.title}
                            <button onClick={() => removeMovie(movie.id)}>Remove</button>
                            {expandedMovie === movie.id && <p>{movie.description}</p>}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default MoviesList;
