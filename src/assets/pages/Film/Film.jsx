import { useEffect, useState } from "react";
import { getOneData } from "../../common/utils/getData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";
import { API_PATH_FILMS } from "../../common/constants/api_path.constants";
import { getAverageReviewScore } from "../../common/utils/getAverageReviewScore";
import { useLocation } from "react-router-dom";

const Film = () => {

    const userData = JSON.parse(sessionStorage.getItem('user'));

    const { state } = useLocation();

    const filmID = state;

    let [film, setFilm] = useState(null)
    let [averageScore, setAverageScore] = useState(0);

    useEffect(() => {
        if (!film)
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

    if (!film || !film.genres) {
        return <div>Cargando...</div>
    }

    const lastReviewIndex = film.reviews.length - 1;
    return (
        <>
            <div className="max-w-6xl mx-auto p-4">
                <DetailedFilm title={film.title} description={film.description} poster={film.poster} avgScore={averageScore} genres={film.genres}/>
                <div className="mt-8">
                    {userData?.isLogged && <NewReview film={film.id} addReview={handleReviewAdded} />}
                    {film?.reviews?.length > 0 && (
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold mb-4">Reseña Destacada</h2>
                            <FeaturedReview
                                review={film.reviews[lastReviewIndex]}
                                film={film}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Film;