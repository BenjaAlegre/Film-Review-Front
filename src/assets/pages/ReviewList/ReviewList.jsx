import { useLocation } from 'react-router-dom';
import { API_PATH_FILMS } from '../../common/constants/api_path.constants';
import { getOneData } from '../../common/utils/getData';
import './ReviewList.css';
import { useEffect, useState } from 'react';
import MiniFilm from '../../components/MiniFilm/MiniFilm';
import MiniReview from './MiniReview';

const ReviewList = () => {

  const { state } = useLocation();

  const film = state;

  return (
    <>
      <MiniFilm title={film.title} poster={film.poster} filmID={film.id} />
      <div className="review-list">
        {film.reviews.map((review) => ( //Aca hacer una clase como la que hice en la lista de films, una minireview o algo asi. Esa va a llevar el evento handleclick que nos va a llevar a la vista de Review, padre de detailedReview
          <MiniReview
            key={review.id}
            id={review.id}
            title={review.title}
            username={review.user.name}
            description={review.description}
            score={review.score}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewList;
