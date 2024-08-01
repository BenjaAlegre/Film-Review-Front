const AdminReviewList = ({ id, title, description, score, createdAt, deletedAt }) => {
    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{score}</p>
            <p>{createdAt}</p>
            <p>{deletedAt}</p>

            <button>DELETE</button>
        </div>
    )
}

export default AdminReviewList;