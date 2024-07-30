import { useEffect, useState } from "react";
import MiniFilm from "./MiniFilm";
import { getData } from "../../common/utils/getData";
import { API_PATH_FILMS } from "../../common/constants/api_path.constants";

const FilmList = () => {

    let [films, setFilms] = useState([])

    useEffect(() => {
        getFilms()
    }, [])

    const getFilms = async () => {
        const filmData = await getData(API_PATH_FILMS)
        setFilms(filmData);
    }

    return (
        <div>
            <h1>FILM LIST!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1</h1>
            <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>

                {films.map((film) => (
                    <MiniFilm
                        key={film.id}
                        poster={film.poster}
                        title={film.title}
                        filmID={film.id} />
                ))}
            </div>
        </div>
    )
}

export default FilmList;