import { Slide, toast, ToastContainer } from "react-toastify";
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";
import 'react-toastify/dist/ReactToastify.css';

const EditReviewForm = ({ reviewID, title, description, score }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const notifySuccess = (message) => toast.success(message)
        const notifyWarning = (warning) => toast.warning(warning)
        const notifyError = (error) => toast.error(error);

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const stringScore = formData.get('score');

        const score = parseInt(stringScore);

        if (!title || !description || !score) {
            notifyWarning("Por favor, complete todos los campos.")
            return;
        }

        try {
            const response = await fetch(`${API_PATH_REVIEWS}/${reviewID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: JSON.stringify({ title, description, score }),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

            notifySuccess("Reseña editada!")

        } catch (error) {
            notifyError("Error: Datos invalidos");
            console.error(error);
        }
    }

    return (
        <>
            <h3 className="text-center text-3xl font-bold :text-white m-2">Edita tu reseña!</h3>

            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Titulo de reseña</label>
                    <input type="text" id="base-input" name="title" defaultValue={title} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Reseña</label>
                    <input type="text" id="large-input" name="description" defaultValue={description} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500" />
                </div>
                <div className="mb-5">
                    <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 :text-white">Calificación</label>
                    <input type="number" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500"     name="score" min={1} max={MAX_REVIEW_SCORE} defaultValue={score} />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enviar</button>
            </form>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                transition={Slide}
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default EditReviewForm;