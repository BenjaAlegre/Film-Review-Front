import { useLocation } from "react-router-dom";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import { getOneData } from "../../common/utils/getData";
import { useEffect, useState } from "react";
import EditReviewForm from "./EditReviewForm";

const EditReview = () =>
{
    const { state } = useLocation();

    const reviewID = state;

    let [review, setReview] = useState([])


    useEffect(() => {
        getReview()
    }, [])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_REVIEWS, reviewID)
        setReview(reviewData);
    }

    if (!review) {
        return <div>Loading...</div>
    }

    return(
        <EditReviewForm reviewID={reviewID} title={review.title} description={review.description} score={review.score}/>
    )
}

export default EditReview;