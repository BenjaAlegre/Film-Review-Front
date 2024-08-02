import { useNavigate } from "react-router-dom"
import './ReviewList.css';
import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";
import reviewImage from "../../../images/review-photo.png"
const MiniReview = ({ review }) => {

    const navigate = useNavigate();
    
    const handleClick = (e) =>
    {
        e.preventDefault();
        navigate('/review',{
            state: review.id
        })
    }

    return (
        <div onClick={handleClick} className="review">


            <blockquote className="text-xl italic font-semibold text-gray-900 m-1 p-1">
                <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <h4 className="text-lg font-sans">{review.user ? review.user.name : 'Deleted user'}</h4>
                <p className="text-sm font-hairline">{review.title}</p>
                <p className="review-description">{review.description}</p>
                <div className="review-rating ">Calificación: {review.score} / {MAX_REVIEW_SCORE}</div>

            </blockquote>
  
        </div>
    )
}

export default MiniReview;