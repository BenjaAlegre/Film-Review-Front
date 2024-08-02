import { useNavigate } from "react-router-dom"
import './ReviewList.css';
import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";

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
            <p>{review.user ? review.user.name : 'Deleted user'}</p>
            <h3 className="review-title">{review.title}</h3>
            <p className="review-description">{review.description}</p>
            <div className="review-rating">Calificación: {review.score} / {MAX_REVIEW_SCORE}</div>
        </div>
    )
}

export default MiniReview;