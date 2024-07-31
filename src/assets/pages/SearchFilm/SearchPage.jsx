import { useContext, useEffect, useState } from "react";
import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";
import { getOneData } from "../../common/utils/getData";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";

const Profile = () => {
    let [reviews, setReview] = useState([])

    useEffect(() => {
        getReview()
    }, [])

    const getReview = async () => {
        const reviewData = await getOneData(API_PATH_REVIEWS, userID)
        setReview(reviewData);
    }

    return (
        <div>
            <UserDetails />
            <UserReviewList />
        </div>
    )
}

export default Profile;