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


            <div className="space-y-4">
            {reviews.map((review) => (
                <UserReview
                    key={review.id}
                    review={review}
                    onReviewDelete={handleReviewChange}
                />
            ))}
        </div>
        </>
    )
}

export default UserReviewList;