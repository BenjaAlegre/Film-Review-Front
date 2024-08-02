import '../ReviewList/ReviewList.css';

const CommentList = ({review}) => {
    console.log(review)
    return (
        <>
            <div className='review'>
                {review.comments.map((comment) => (
                    <div key={comment.id}>
                        <p className='review-title'>{comment.user? comment.user.name : 'Deleted user'}</p>
                        <p className='review-description'>{comment.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommentList;