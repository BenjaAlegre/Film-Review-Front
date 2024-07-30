import { useNavigate } from "react-router-dom";

const FeaturedReview = ({ title, description, score, user, filmID }) => {

    const navigate = useNavigate();

    const handleClick = (e) => {

        console.log(filmID);
        e.preventDefault();
        navigate('/reviewList', {
            state: filmID
        })

    }

    return (
        <>
            <div>
                <h3>{title}</h3>
                <p>{user}</p>
                <p>{score}</p>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <button onClick={handleClick}>See all reviews</button>
        </>
    )
}

export default FeaturedReview;