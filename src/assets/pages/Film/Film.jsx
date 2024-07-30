import { useEffect, useState} from "react";
import { getOneFilmData } from "../../common/utils/getFilmData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";
import { API_PATH_FILMS } from "../../common/constants/api_path.constants";
import { getAverageReviewScore } from "../../common/utils/getAverageReviewScore";

const Film = () =>
{
    const filmID = "4ce26d3e-1702-4cd1-b334-a8907ecb45ef"

    let [film, setFilm] = useState([])
    let [averageScore, setAverageScore] = useState(0);

    useEffect(() =>
    {
      getFilm()
    },[])

    const getFilm = async () =>
    {
        const filmData = await getOneFilmData(API_PATH_FILMS, filmID)
        setFilm(filmData);
        const avg = getAverageReviewScore(filmData.reviews)
        setAverageScore(avg);
    }

    if(!film || !film.reviews)
    {
        return <div>Loading...</div>
    }

    return(
        <>
        <DetailedFilm title={film.title} description={film.description} poster={film.poster} avgScore={averageScore}/>
        <div>
        <NewReview film={film.id}/>
        <FeaturedReview title={film.reviews[0].title} description={film.reviews[0].description} score={film.reviews[0].score} user={film.reviews[0].user.name}/>
        </div>
        </>
    )
}

export default Film;