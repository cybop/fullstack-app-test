import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMovieContext } from './MoviesContext';
import { IoChevronBack } from 'react-icons/io5';
import { PiTicket } from 'react-icons/pi';
import { CiClock2 } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';

import './MovieDescription.css';

function MovieDescription() {
  // Get the index parameter from the URL
  const { index } = useParams();

  // Access movies from the movie context
  const { movies } = useMovieContext();

  // Get the specific movie using the index
  const movie = movies[parseInt(index)];

  // Use the navigate hook to go back to the previous page
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Render a message if the movie is not found
  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      {/* Backward section with a back button */}
      <div className="backwardSection">
        <div>
          <IoChevronBack
            size="30px"
            onClick={goBack}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div style={{ marginLeft: '110px', fontSize: '18px' }}>Detail</div>
      </div>
      {/* Movie cover, thumbnail, and title */}
      <div>
        <div className="coverAndTitleContainer">
          <img src={movie.cover} alt={movie.title} className="coverImage" />
          <div className="thumbnailAndTitle">
            <img
              src={movie.thumbnail}
              alt={movie.title}
              className="movieDescriptionThumbnail"
            />
            <div className="movieTitle">{movie.title}</div>
          </div>
        </div>
      </div>
      {/* Movie details: date, duration, type */}
      <div style={{ display: 'flex', marginLeft: '50px' }}>
        <div style={{ display: 'flex', marginRight: '10px' }}>
          <CiCalendar size="20px" color="grey" />
          <p className="movieData">{movie.date}</p>
          <span class="divider" />
        </div>
        <div style={{ display: 'flex', marginRight: '10px' }}>
          <CiClock2 size="20px" color="grey" />
          <p className="movieData">{movie.duration} Minutes</p>
          <span class="divider" />
        </div>
        <div style={{ display: 'flex' }}>
          <PiTicket size="20px" color="grey" />
          <p className="movieData">{movie.type}</p>
        </div>
      </div>
      {/* About movie section */}
      <div style={{ width: '110px', marginLeft: '35px', marginTop: '20px' }}>
        <h4 style={{ margin: '0 0 7px', fontWeight: '500' }}>About Movie</h4>
        <hr class="solid" />
      </div>
      {/* Movie description */}
      <p className="description"> {movie.description}</p>
    </div>
  );
}

export default MovieDescription;
