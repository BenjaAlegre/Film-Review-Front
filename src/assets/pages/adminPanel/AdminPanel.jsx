import { useEffect, useState } from "react"
import { getPromise } from "../../common/utils/getData";
import { API_PATH_REVIEWS, API_PATH_USERS } from "../../common/constants/api_path.constants";
import AdminReviewList from "./AdminReviewList";
import AdminUserList from "./AdminUserList";

const AdminPanel = () =>
{
    const [users, setUsers] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [hideUsers, setHideUsers] = useState(false);

    useEffect(() =>
    {
        if(!users && !reviews)
        getData()
    }, [users, reviews])

    const getData = async () => {
        const adminData = await getPromise(API_PATH_REVIEWS, API_PATH_USERS);
        setReviews(adminData[0]);
        setUsers(adminData[1]);
    }

    const handleDataChange = () =>
    {
        getData();
    }

    const handleClick = (e) =>
    {
        e.preventDefault;

        setHideUsers(!hideUsers);
    }

    if (!users || !reviews) {
        return <div>Loading...</div>
    }

    return (
        <>
            <button onClick={handleClick}>CHANGE</button>
            {hideUsers ? (
                users.map((user) => (
                    <AdminUserList
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    createdAt={user.createdAt}
                    deletedAt={user.deletedAt}/>
                ))
            ) : (
                reviews.map((review) => (
                    <AdminUserList
                    id={review.id}
                    title={review.title}
                    description={review.description}
                    score={review.score}
                    createdAt={review.createdAt}
                    deletedAt={review.deletedAt}/>
                ))
            )}
        </>
    );
    
}

export default AdminPanel;