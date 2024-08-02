import { useNavigate } from "react-router-dom"
import './ReviewList.css';
import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";

const MiniReview = ({ id, title, description, score, username}) => {

    const navigate = useNavigate();
    
    const handleClick = (e) =>
    {
        console.log(id);
        e.preventDefault();
        navigate('/review',{
            state: id
        })
    }

    return (
        <div onClick={handleClick} className="review">
            <p>{username}</p>
            <h3 className="review-title">{title}</h3>
            <p className="review-description">{description}</p>
            <div className="review-rating">Calificación: {score} / {MAX_REVIEW_SCORE}</div>
        </div>
    )
}

export default MiniReview;