import { useLocation } from "react-router-dom";
import EditReviewForm from "./EditReviewForm";

const EditReview = () =>
{
    const { state } = useLocation();

    const review = state;

    return(
        <EditReviewForm reviewID={review.id} title={review.title} description={review.description} score={review.score}/>
    )
}

export default EditReview;