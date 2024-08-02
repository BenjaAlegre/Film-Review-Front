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

            <button type="button" onClick={handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Ver todas las reseñas</button>
        </>
    )
}

export default FeaturedReview;