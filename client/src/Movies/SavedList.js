import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = props => (
  console.log(props),
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <div>
        <NavLink to={`/movies/${movie.id}`}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      </div>
    ))}
    <Link to='/'>
      <div className="home-button">Home</div>
    </Link>
  </div>
);

export default SavedList;
