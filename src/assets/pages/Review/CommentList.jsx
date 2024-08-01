import { useEffect, useState } from "react"
import { API_PATH_REVIEWS } from "../../common/constants/api_path.constants"
import { getOneData } from "../../common/utils/getData"

const CommentList = ({review}) => {
    
    return (
        <>
            <div>
                {review.comments.map((comment) => (
                    <div key={comment.id}>
                        <p>{comment.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CommentList;