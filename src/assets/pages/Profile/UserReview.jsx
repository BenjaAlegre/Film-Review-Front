import { useNavigate } from "react-router-dom";
import MiniReview from "../ReviewList/MiniReview";

const UserReview = ({ id, title, description, score, username }) => {

    const navigate = useNavigate();

    const handleEdit = (e) =>
    {
        e.preventDefault();

        navigate('/editReview',{
            state: id
        })
    }

    return (
        <>
            <MiniReview
                key={id}
                id={id}
                title={title}
                username={username}
                description={description}
                score={score} />

            <button onClick={handleEdit}>Edit</button>
            <button>Delete</button>
        </>
    )
}

export default UserReview;