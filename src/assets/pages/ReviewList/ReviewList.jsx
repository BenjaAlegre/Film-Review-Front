import { useLocation } from 'react-router-dom';
import { API_PATH_FILMS } from '../../common/constants/api_path.constants';
import { getOneData } from '../../common/utils/getData';
import './ReviewList.css';
import { useEffect, useState } from 'react';

const ReviewList = () => {

  const { state } = useLocation();

  console.log({ state });
  console.log(state);
  const filmID = state;
  console.log(filmID);

  let [film, setFilm] = useState([])

  useEffect(() => {
    getFilm()
  }, [])

  const getFilm = async () => {
    const filmData = await getOneData(API_PATH_FILMS, filmID)
    setFilm(filmData);
  }

  if(!film || !film.reviews)
  {
      return <div>Loading...</div>
  }

  return (
    <div className="review-list">
      {film.reviews.map((review) => (  
        <div className="review" key={review.id}>
          <h3 className="review-title">{review.title}</h3>
          <p className="review-description">{review.description}</p>
          <div className="review-rating">Score: {review.score} / 5</div>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
