import { API_PATH_COMMENTS } from "../../common/constants/api_path.constants";

const NewComment = ({review, onNewComment}) =>
{
    const userData = JSON.parse(sessionStorage.getItem('user'))
    const user = userData.id;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const description = formData.get('description');
        const title = "title"; //hasta cambiar el entity y dto de comment.

        try {
            const response = await fetch(API_PATH_COMMENTS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ title, description, review, user }),
            });

            console.log(response);

            if (!response.ok) {
                throw new Error("Datos invalidos");
            }

            onNewComment();

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h3>Leave a comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="description"></label>
                <input type="text" name="description" />
                <button>submit!</button>
            </form>
        </>
    )
}

export default NewComment;