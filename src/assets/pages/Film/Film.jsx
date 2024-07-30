import { getOneFilmData } from "../../common/utils/getFilmData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";

const Film = ({filmID, title, description, poster, reviews}) =>
{
    getOneFilmData("http://localhost:3003", )
    //calcular promedio de score

    return(
        <>
        <DetailedFilm/>
        <NewReview/>
        <FeaturedReview/>
        </>
    )
}

export default Film();