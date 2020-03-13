import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => (
  console.log(props),
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      console.log(movie),
      <Link to={`/movies/${movie.id}`}>
        <span className="saved-movie">{movie.title}</span>
      </Link>
    ))}
    <Link to='/'>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
