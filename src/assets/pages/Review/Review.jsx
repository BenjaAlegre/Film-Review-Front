import { useLocation } from "react-router-dom";
import CommentList from "./CommentList";
import DetailedReview from "./DetailedReview";
import { useEffect, useState } from "react";
import { getOneData } from "../../common/utils/getData";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import NewComment from "./NewComment";

const Review = () => {
    const { state } = useLocation();

    const reviewID = state;
    console.log(reviewID);
    let [review, setReview] = useState(null)

    useEffect(() => {
        if(!review)
        getReview()
    }, [review])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_REVIEWS, reviewID)
        setReview(reviewData);
    }

    const handleCommentChange = () =>
    {
        getReview();
    }

    if (!review || !review.user) {
        return <div>Loading...</div>
    }

    return (
        <>
            <DetailedReview reviewTitle={review.title} reviewDescription={review.description} score={review.score} reviewUser={review.user.name} filmTitle={review.film.title} filmPoster={review.film.poster}/>
            <div>
                <NewComment review={review.id} onNewComment={handleCommentChange}/>
                {review?.comments?.length > 0 && <CommentList review={review}/>}
            </div>
        </>
    )
}

export default Review;