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

            <button type="button" onClick={handleEdit} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Editar</button>
            <button type="button" onClick={handleDelete} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Borrar</button>
        </>
    )
}

export default UserReview;