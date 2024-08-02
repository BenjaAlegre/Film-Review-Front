import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";

const Profile = () => {
    const userData = JSON.parse(sessionStorage.getItem('user'));


    return (
        <div className="flex justify-center">
            <UserDetails name={userData.name} email={userData.email} role={userData.role} />
            <UserReviewList userID={userData.id} />
        </div>
    )
}

export default Profile;