import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";

const EditReviewForm = ({reviewID, title, description, score }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const stringScore = formData.get('score');

        const score = parseInt(stringScore);

        try {
            const response = await fetch(`${API_PATH_REVIEWS}/${reviewID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, description, score }),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Edit your review</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" defaultValue={title} />

                <label htmlFor="description">Content</label>
                <input type="text" name="description" defaultValue={description} />

                <label htmlFor="score">Score</label>
                <input type="number" name="score" min={1} max={MAX_REVIEW_SCORE} defaultValue={score} />

                <button>Submit!</button>
            </form>
        </>
    )
}

export default EditReviewForm;