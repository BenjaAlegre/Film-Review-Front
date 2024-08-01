import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";
import UserList from "./UserList";

const Profile = () => {
    const userData = JSON.parse(sessionStorage.getItem('user'));


    return (
        <div>
            <UserDetails name={userData.name} email={userData.email} role={userData.role} />
            <UserReviewList userID={userData.id} />
            {userData.role == "admin" && (
                <UserList/>
            )}
        </div>
    )
}

export default Profile;