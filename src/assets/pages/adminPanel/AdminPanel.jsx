import { useEffect, useState } from "react";
import { getPromise } from "../../common/utils/getData";
import { API_PATH_DELETEDREVIEWS, API_PATH_DELETEDUSERS, API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import AdminReviewList from "./AdminReviewList";
import AdminUserList from "./AdminUserList";

const AdminPanel = () => {
    const [users, setUsers] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [hideUsers, setHideUsers] = useState(false);

    const userData = JSON.parse(sessionStorage.getItem('user'));

    useEffect(() => {
        if (!users && !reviews) {
            getData();
        }
    }, [users, reviews]);

    const getData = async () => {
        const adminData = await getPromise(API_PATH_DELETEDREVIEWS, API_PATH_DELETEDUSERS, userData.role);
        setReviews(adminData[0]);
        setUsers(adminData[1]);
    };

    const handleDataChange = () => {
        getData();
    };

    const handleClick = (e) => {
        e.preventDefault();
        setHideUsers(!hideUsers);
    };

    if (!users || !reviews) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <button className="flex items-center text-indigo-700 border border-indigo-600 py-2 px-6 gap-2 rounded m-5" onClick={handleClick}>{hideUsers ? 'See review list' : 'See user list'}</button>
            {hideUsers ? (
                <AdminUserList users={users} onUserDelete={handleDataChange} adminRole={userData.role} />
            ) : (
                <AdminReviewList reviews={reviews} onReviewDelete={handleDataChange} />
            )}
        </>
    );
};

export default AdminPanel;
