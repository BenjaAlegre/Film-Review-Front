import '../ReviewList/ReviewList.css';

const CommentList = ({review}) => {
    console.log(review)
    return (
        <>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            {review.comments.length > 0 ? (
                review.comments.map((comment) => (
                    <div key={comment.id} className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 last:mb-0 last:border-b-0">
                        <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {comment.user ? comment.user.name : 'Usuario eliminado'}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            {comment.description}
                        </p>
                    </div>
                ))
            ) : (
                <p className="text-gray-700 dark:text-gray-300">No comments available.</p>
            )}
        </div>
        </>
    );
}

export default CommentList;