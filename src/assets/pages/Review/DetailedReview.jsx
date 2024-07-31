import { POSTER_PATH } from "../../common/constants/poster_path.constants";

const DetailedReview = ({reviewTitle, reviewDescription, score, reviewUser, filmTitle, filmPoster}) => {
    return (
        <div>
            <div>
                <img src={POSTER_PATH + filmPoster} alt={filmTitle} />
                <h2>{filmTitle}</h2>
            </div>
            <div>
                <h3>{reviewTitle}</h3>
                <p>{score}</p>
                <p>{reviewUser}</p>
                <p>{reviewDescription}</p>
            </div>
        </div>
    )
}

export default DetailedReview;