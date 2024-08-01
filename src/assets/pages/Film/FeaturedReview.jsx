import { useNavigate } from "react-router-dom";
import MiniReview from "../ReviewList/MiniReview";

const FeaturedReview = ({ reviewID, title, description, score, user, filmID }) => {

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
            <MiniReview
            key={reviewID}
            id={reviewID}
            title={title}
            description={description}
            score={score}
            username={user} />

            <button onClick={handleClick}>See all reviews</button>
        </>
    )
}

export default FeaturedReview;