
import { useNavigate } from "react-router-dom";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";

const AdminReviewList = ({ reviews, onReviewDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate('/editReview', {
            state: id
        });
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_PATH_REVIEWS}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: JSON.stringify({ id }),
            });

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

            onReviewDelete();
        } catch (error) {
            console.error(error);
        }
    };
    const sortedReviews = [...reviews].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (

        <div className="shadow-lg rounded-lg overflow-x-auto mx-4 md:mx-10">
        <table className="w-full table-fixed">
            <thead>
                <tr className="bg-gray-100">
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Titulo</th>
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Descripción</th>
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Puntuación</th>
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Creación</th>
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Elimidado</th>
                    <th className="py-4 px-2 sm:px-4 text-left text-gray-600 font-bold uppercase truncate">Acción</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                {sortedReviews.map((review) => (
                    <tr key={review.id}>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200 truncate">{review.title}</td>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200 truncate">{review.description}</td>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200 truncate">{review.score}</td>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200 truncate">{review.createdAt}</td>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200 truncate">{review.deletedAt ? review.deletedAt : '-'}</td>
                        <td className="py-2 px-2 sm:px-4 border-b border-gray-200">
                            <div className="flex flex-wrap gap-2">
                                <button 
                                    onClick={() => handleEdit(review.id)} 
                                    className="px-4 py-2 font-bold text-white rounded bg-yellow-500 hover:bg-yellow-600 text-sm sm:text-base flex-1">
                                    EDITAR
                                </button>
                                <button 
                                    onClick={() => handleDelete(review.id)} 
                                    className="px-4 py-2 font-bold text-white rounded bg-red-500 hover:bg-red-600 text-sm sm:text-base flex-1">
                                    ELIMINAR
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};

export default AdminReviewList;
