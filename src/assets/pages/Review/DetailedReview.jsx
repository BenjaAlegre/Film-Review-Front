import { POSTER_PATH } from "../../common/constants/poster_path.constants";
import MiniFilm from "../../components/MiniFilm/MiniFilm";
import MiniReview from "../ReviewList/MiniReview";

const DetailedReview = ({reviewID, reviewTitle, reviewDescription, score, reviewUser, filmTitle, filmPoster, filmID}) => {
    return (
        <div>
            <MiniFilm title={filmTitle} poster={filmPoster} filmID={filmID} />
            <MiniReview
            key={reviewID}
            id={reviewID}
            title={reviewTitle}
            username={reviewUser}
            description={reviewDescription}
            score={score}/>
        </div>
    )
}

export default DetailedReview;