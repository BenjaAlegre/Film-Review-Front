const CommentList = ({review}) => {
    console.log(review)
    return (
        <>
            <div>
                {review.comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.user.name}</p>
                        <p>{comment.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommentList;