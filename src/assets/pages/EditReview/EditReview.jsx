import { useLocation } from "react-router-dom";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import { getOneData } from "../../common/utils/getData";
import { useEffect, useState } from "react";
import EditReviewForm from "./EditReviewForm";

const EditReview = () =>
{
    const { state } = useLocation();

    const review = state;

    if (!review) {
        return <div>Loading...</div>
    }

    return(
        <EditReviewForm reviewID={review.id} title={review.title} description={review.description} score={review.score}/>
    )
}

export default EditReview;