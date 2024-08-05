import { useLocation } from 'react-router-dom';
import './ReviewList.css';
import MiniFilm from '../../components/MiniFilm/MiniFilm';
import MiniReview from './MiniReview';

const ReviewList = () => {

  const { state } = useLocation();

  const film = state;

  return (
    
    <div className="max-w-6xl mx-auto p-4">
       <div className="mb-4 md:mb-0">
          <MiniFilm title={film.title} poster={film.poster} filmID={film.id} />
        </div>
      <div className="flex flex-col md:flex-row md:space-x-6">
       
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Reviews</h2>
          <div className="space-y-4">
            {film.reviews.length > 0 ? (
              film.reviews.map((review) => (
                <MiniReview key={review.id} review={review} />
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">No reviews available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
