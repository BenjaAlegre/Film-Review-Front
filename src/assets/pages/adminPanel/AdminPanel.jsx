import { useEffect, useState } from "react"
import { getPromise } from "../../common/utils/getData";
import { API_PATH_DELETEDUSERS, API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import AdminReviewList from "./AdminReviewList";
import AdminUserList from "./AdminUserList";

const AdminPanel = () =>
{
    const [users, setUsers] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [hideUsers, setHideUsers] = useState(false);

    const userData = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() =>
    {
        if(!users && !reviews)
        getData()
    }, [users, reviews])

    const getData = async () => {
        const adminData = await getPromise(API_PATH_REVIEWS, API_PATH_DELETEDUSERS, userData.role);
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
            <button onClick={handleClick}>{hideUsers ? 'See review list' : 'See user list'}</button>
            {hideUsers ? (
                users.map((user) => (
                    <AdminUserList
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    role={user.role.description}
                    email={user.email}
                    createdAt={user.createdAt}
                    deletedAt={user.deletedAt}
                    onUserDelete={handleDataChange}
                    adminRole={userData.role}/>
                ))
            ) : (
                reviews.map((review) => (
                    <AdminReviewList
                    key={review.id}
                    id={review.id}
                    title={review.title}
                    description={review.description}
                    score={review.score}
                    createdAt={review.createdAt}
                    deletedAt={review.deletedAt}
                    onReviewDelete={handleDataChange}/>
                ))
            )}
        </>
    );
    
}

export default AdminPanel;