import { useEffect, useState } from "react"
import { getOneData } from "../../common/utils/getData"
import MiniReview from "../ReviewList/MiniReview"
import { API_PATH_USERREVIEWS } from "../../common/constants/api_path.constants"
import UserReview from "./UserReview"

const UserReviewList = ({ userID }) => {
    let [reviews, setReview] = useState([])

    useEffect(() => {
        getReview()
    }, [])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_USERREVIEWS, userID)
        setReview(reviewData);
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
                        score={review.score} />

                ))}
            </div>
        </>
    )
}

export default UserReviewList;