import { useContext } from "react";
import {  } from "../../../Context";
import { CurrentUserContext } from "../../../App";

const UserDetails = () => {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    return(
    <div>
        <p>{currentUser.name}</p>
    </div>
)}

export default UserDetails;