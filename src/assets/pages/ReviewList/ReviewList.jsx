import { useLocation } from 'react-router-dom';
import './ReviewList.css';
import MiniFilm from '../../components/MiniFilm/MiniFilm';
import MiniReview from './MiniReview';

const ReviewList = () => {

  const { state } = useLocation();

  const film = state;

  return (
    <>
      <MiniFilm title={film.title} poster={film.poster} filmID={film.id} />
      <div className="review-list">
        {film.reviews.map((review) => (
          <MiniReview
            key={review.id}
            review={review}
          />
        ))}
      </div>
    </>
  );
};

export default ReviewList;
