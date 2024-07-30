import { useEffect, useState} from "react";
import { getOneData } from "../../common/utils/getData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";
import { API_PATH_FILMS } from "../../common/constants/api_path.constants";
import { getAverageReviewScore } from "../../common/utils/getAverageReviewScore";
import { useLocation } from "react-router-dom";

const Film = () =>
{
    const { state } = useLocation();

    console.log({state});
    console.log(state);
    const filmID = state;
    console.log(filmID);
    // const filmID = "4ce26d3e-1702-4cd1-b334-a8907ecb45ef"

    let [film, setFilm] = useState([])
    let [averageScore, setAverageScore] = useState(0);

    useEffect(() =>
    {
      getFilm()
    },[])

    const getFilm = async () =>
    {
        const filmData = await getOneData(API_PATH_FILMS, filmID)
        setFilm(filmData);
        if(filmData.reviews)
        {
            const avg = getAverageReviewScore(filmData.reviews)
            setAverageScore(avg);
        }
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
        {film.reviews.length > 0 && <FeaturedReview title={film.reviews[0].title} description={film.reviews[0].description} score={film.reviews[0].score} user={film.reviews[0].user.name} filmID={film.id}/>}
        </div>
        </>
    )
}

export default Film;