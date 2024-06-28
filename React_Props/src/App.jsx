import React from 'react';
import MoviesList from './components/MoviesList';

const App = () => {
    return (
        <div className="App">
            <h1>Favorite Movies</h1>
            <MoviesList />
        </div>
    );
};

export default App;