import MiniFilm from "../../components/MiniFilm/MiniFilm";
import MiniReview from "../ReviewList/MiniReview";

const DetailedReview = ({review}) => {
    return (
        <div>
            <MiniFilm title={review.film.title} poster={review.film.poster} filmID={review.film.id} />
            <MiniReview
            key={review.id}
            review={review}/>
        </div>
    )
}

export default DetailedReview;