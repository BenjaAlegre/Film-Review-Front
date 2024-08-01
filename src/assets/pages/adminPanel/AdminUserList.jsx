import { API_PATH_USERS } from "../../common/constants/api_path.constants";

const AdminUserList = ({id, name, email, role, createdAt, deletedAt, onUserDelete }) => {

    const handleClick = async (e) =>
    {
        e.preventDefault()

        try {
            const response = await fetch(`${API_PATH_USERS}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ id }),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

            onUserDelete();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{role}</p>
            <p>{email}</p>
            <p>{createdAt}</p>
            <p>{deletedAt}</p>

            <button onClick={handleClick}>DELETE</button>
        </div>
    )
}

export default AdminUserList;