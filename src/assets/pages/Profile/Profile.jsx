import { useContext } from "react";
import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";
import { CurrentUserContext } from "../../../App";
import UserList from "./UserList";

const Profile = () => {
    const { currentUser } = useContext(CurrentUserContext)


    console.log(currentUser.role)
    return (
        <div>
            <UserDetails name={currentUser.name} email={currentUser.email} role={currentUser.role} />
            <UserReviewList userID={currentUser.id} />
            {currentUser.role == "admin" && (
                <UserList/>
            )}
        </div>
    )
}

export default Profile;