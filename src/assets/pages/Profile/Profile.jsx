import { useContext} from "react";
import UserDetails from "./UserDetails";
import UserReviewList from "./UserReviewList";
import { CurrentUserContext } from "../../../App";

const Profile = () => {
    const {currentUser} = useContext(CurrentUserContext)

    return (
        <div>
            <UserDetails name={currentUser.name} email={currentUser.email} role={currentUser.role}/>
            <UserReviewList userID={currentUser.id}/>
        </div>
    )
}

export default Profile;