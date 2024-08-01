import { useEffect, useState } from "react"
import { getOneData } from "../../common/utils/getData"
import MiniReview from "../ReviewList/MiniReview"
import { API_PATH_USERREVIEWS } from "../../common/constants/api_path.constants"
import UserReview from "./UserReview"

const UserReviewList = ({ userID }) => {
    let [reviews, setReview] = useState([])

    useEffect(() => {
        if(reviews.length <= 0)
        getReview()
    }, [reviews])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_USERREVIEWS, userID)
        setReview(reviewData);
        console.log(reviewData);
    }

    const handleReviewChange = () =>
    {
        getReview();
    }

    return (
        <>
            <div className="review-list">
                {reviews.map((review) => (

                    <UserReview
                        key={review.id}
                        id={review.id}
                        title={review.title}
                        username={review.user.name}
                        description={review.description}
                        score={review.score}
                        filmTitle={review.film.title}
                        filmRelease={review.film.released}
                        onReviewDelete={handleReviewChange} />

                ))}
            </div>
        </>
    )
}

export default UserReviewList;