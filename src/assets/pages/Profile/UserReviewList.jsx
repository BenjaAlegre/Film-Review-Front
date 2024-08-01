import { useEffect, useState } from "react"
import { getOneData } from "../../common/utils/getData"
import { API_PATH_USERREVIEWS } from "../../common/constants/api_path.constants"
import UserReview from "./UserReview"

const UserReviewList = ({ userID }) => {
    let [reviews, setReview] = useState(null)

    useEffect(() => {
        if(!reviews)
        getReview()
    }, [reviews])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_USERREVIEWS, userID)
        setReview(reviewData);
    }

    const handleReviewChange = () =>
    {
        getReview();
    }

    if(!reviews)
    {
        return <div>Loading...</div>
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