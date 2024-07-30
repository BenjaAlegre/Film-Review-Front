import { useEffect, useState} from "react";
import { getOneFilmData } from "../../common/utils/getFilmData";
import DetailedFilm from "./DetailedFilm";
import FeaturedReview from "./FeaturedReview";
import NewReview from "./NewReview";

const Film = ( ) =>
{
    const filmID = "b891397a-9582-43bd-92d8-ed36314e0aa3"

    let [film, setFilm] = useState([])

    useEffect(() =>
    {
      getFilm()
    },[])

    const getFilm = async () =>
    {
      setFilm(await getOneFilmData("http://localhost:3005/films", filmID))
    }

    return(
       /*  <>
        <DetailedFilm/>
        <NewReview/>
        <FeaturedReview/>
        </> */
        <>
            {film.map((film) => (
              <DetailedFilm
                key = {film.id}
                title = {film.title}
              />
            ))}
        </>
    )
}

export default Film;