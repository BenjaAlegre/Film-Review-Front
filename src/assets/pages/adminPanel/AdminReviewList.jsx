import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import { useNavigate } from "react-router-dom";

const AdminReviewList = ({ id, title, description, score, createdAt, deletedAt, onReviewDelete }) => {

    const navigate = useNavigate();

    const handleEdit = (e) =>
        {
            e.preventDefault();
    
            navigate('/editReview',{
                state: id
            })
        }

    const handleDelete = async (e) =>
        {
            e.preventDefault();
    
            try {
                const response = await fetch(`${API_PATH_REVIEWS}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionStorage.getItem('token')
                    },
                    body: JSON.stringify({ id }),
                });
    
                console.log(response);
    
                if (!response.ok) {
                    throw new Error("Datos invalidos");
                }

                onReviewDelete();
    
            } catch (error) {
                console.error(error);
            }
        }
    
    return (
        <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{score}</p>
            <p>{createdAt}</p>
            <p>{deletedAt}</p>

            <button onClick={handleEdit}>EDIT</button>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default AdminReviewList;