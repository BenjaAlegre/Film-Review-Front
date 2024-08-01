const AdminUserList = ({id, name, email, createdAt, deletedAt }) => {
    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{email}</p>
            <p>{createdAt}</p>
            <p>{deletedAt}</p>

            <button>DELETE</button>
        </div>
    )
}

export default AdminUserList;