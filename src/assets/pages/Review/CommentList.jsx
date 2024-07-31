import { useEffect, useState } from "react"
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants"
import { getOneData } from "../../common/utils/getData"

const CommentList = ({reviewID}) => {
    let [review, setReview] = useState([])

    useEffect(() => {
        getReview()
    }, [])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_REVIEWS, reviewID)
        setReview(reviewData);
    }

    if(!review || !review.comments)
    {
        return(
        <div>Loading...</div>
        )
    }

    return (
        <>
            <div>
                {review.comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommentList;