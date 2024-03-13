import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMovieContext } from './movies/MoviesContext';

// SampleArrow component for custom slider arrows
function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
}

const Home = () => {
  // Getting movies data with context
  const { movies } = useMovieContext();

  // Configuring carousel with responsive settings
  const settings = {
    dots: false,
    lazyLoad: true,
    swipeToSlide: true,
    slidesToShow: 5,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          lazyLoad: true,
          swipeToSlide: true,
          slidesToShow: 3,
          nextArrow: <SampleArrow />,
          prevArrow: <SampleArrow />,
          initialSlide: 0,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 400,
        settings: {
          dots: false,
          lazyLoad: true,
          swipeToSlide: true,
          slidesToShow: 2,
          nextArrow: <SampleArrow />,
          prevArrow: <SampleArrow />,
          initialSlide: 0,
          adaptiveHeight: true,
        },
      },
    ],
  };

  // Slice the movies array to get the first 5 and the rest
  const firstMovies = movies.slice(0, 5);
  const otherMovies = movies.slice(5);

  return (
    <div>
      {/* Title for the carousel */}
      <h3 className="carouselTitle">What do you want to watch ?</h3>
      {/* Carousel for the first 5 movies */}
      <div className="carousel">
        <Slider {...settings}>
          {firstMovies.map((movie, index) => (
            <div key={index}>
              <Link to={`/movies/${index}`}>
                {' '}
                {/* Link to movie details */}
                <div className="movieImageContainer">
                  <img
                    src={movie.thumbnail}
                    alt={movie.title}
                    className="movieThumbnail"
                  />
                  <div className="displayID">{index + 1}</div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      {/* Other movies container */}
      <div className="otherMoviesContainer">
        {otherMovies.map((movie, index) => (
          <div key={index}>
            <Link to={`/movies/${index + 5}`}>
              {/* Link to movie details */}
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="otherMovie"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
