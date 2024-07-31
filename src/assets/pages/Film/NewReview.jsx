    import { useContext } from "react";
    import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants";
    import { MAX_REVIEW_SCORE } from "../../common/constants/maxReviewScore.constants";
    import { CurrentUserContext } from "../../../App";

    const NewReview = ({film}) => {

        const { currentUser } = useContext(CurrentUserContext);

        const userID = currentUser.id;

        const handleSubmit = async (e) => {
            e.preventDefault();

            const formData = new FormData(e.target);
            const title = formData.get('title');
            const description = formData.get('description');
            const stringScore = formData.get('score');

            const score = parseInt(stringScore);

            try {
                const response = await fetch(API_PATH_REVIEWS, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ title, description, score, film, userID }),
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
                <h3>Leave your review!</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Review Title</label>
                    <input type="text" name="title" />
                    <label htmlFor="description">Review Content</label>
                    <input type="text" name="description" />
                    <label htmlFor="score">Score</label>
                    <input type="number" name="score" min={1} max={MAX_REVIEW_SCORE}/>
                    <button>submit!</button>
                </form>
            </>
        )
    }

    export default NewReview;