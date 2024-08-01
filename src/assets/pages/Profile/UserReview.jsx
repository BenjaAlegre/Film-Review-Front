import { useNavigate } from "react-router-dom";
import MiniReview from "../ReviewList/MiniReview";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";

const UserReview = ({ id, title, description, score, username, filmTitle, filmRelease, onReviewDelete }) => {

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
        <>
            {/* <h3>{filmTitle}</h3> */}
            <MiniReview
                key={id}
                id={id}
                title={title}
                username={username}
                description={description}
                score={score} />

            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default UserReview;