import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";

const Profile = () => {
    const userData = JSON.parse(sessionStorage.getItem('user'));


    return (
        <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row md:space-x-6">
            <div className="flex-shrink-0">
                <UserDetails name={userData.name} email={userData.email} role={userData.role} />
            </div>
            <div className="flex-grow">
                <UserReviewList userID={userData.id} />
            </div>
        </div>
    )
}

export default Profile;