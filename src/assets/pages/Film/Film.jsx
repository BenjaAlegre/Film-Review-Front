import { useEffect, useState } from "react";
import { getOneData } from "../../common/utils/getData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";
import { API_PATH_FILMS } from "../../common/constants/api_path.constants";
import { getAverageReviewScore } from "../../common/utils/getAverageReviewScore";
import { useLocation } from "react-router-dom";

const Film = () => {

    const { state } = useLocation();

    const filmID = state;

    let [film, setFilm] = useState(null)
    let [averageScore, setAverageScore] = useState(0);

    useEffect(() => {
        if(!film)
        getFilm()
    }, [film])

    const getFilm = async () => {
        const filmData = await getOneData(API_PATH_FILMS, filmID)
        setFilm(filmData);
        console.log(filmData);
        if (filmData.reviews) {
            const avg = getAverageReviewScore(filmData.reviews)
            setAverageScore(avg);
        }
    }

    const handleReviewAdded = () => {
        getFilm();
    };

    if (!film) {
        return <div>Loading...</div>
    }

    const lastReviewIndex = film.reviews.length - 1;
    return (
        <>
            <DetailedFilm title={film.title} description={film.description} poster={film.poster} avgScore={averageScore} />
            <div>
                <NewReview film={film.id} addReview={handleReviewAdded} />
                {film?.reviews?.length > 0 && <FeaturedReview reviewID={film.reviews[lastReviewIndex].id} title={film.reviews[lastReviewIndex].title} description={film.reviews[lastReviewIndex].description} score={film.reviews[lastReviewIndex].score} user={film.reviews[lastReviewIndex].user.name} filmID={film.id} />}
            </div>
        </>
    )
}

export default Film;