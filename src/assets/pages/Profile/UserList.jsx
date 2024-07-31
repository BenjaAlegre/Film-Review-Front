import { useEffect, useState } from "react"
import { API_PATH_USERS } from "../../common/constants/api_path.constants"
import { getData } from "../../common/utils/getData"
import MiniUser from "./MiniUser"

const UserList = () => {
    let [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const userData = await getData(API_PATH_USERS)
        setUsers(userData);
        console.log(userData + "user");
    }

    return (
        <>
            <div>
                {users.map((user) => (

                    <MiniUser
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        role={user.role} />
                ))}
            </div>
        </>
    )
}



export default UserList;