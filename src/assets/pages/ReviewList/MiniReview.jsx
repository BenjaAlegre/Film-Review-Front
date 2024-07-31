import { useNavigate } from "react-router-dom"
import './ReviewList.css';

const MiniReview = ({ id, title, description, score}) => {

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
            <h3 className="review-title">{title}</h3>
            <p className="review-description">{description}</p>
            <div className="review-rating">Score: {score} / 5</div>
        </div>
    )
}

export default MiniReview;