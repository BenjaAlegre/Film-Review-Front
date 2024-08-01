import { POSTER_PATH } from "../../common/constants/poster_path.constants";

const DetailedFilm = ({title, description, poster, avgScore}) => (
    <div>
        <img src={POSTER_PATH + poster} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        {avgScore != 0 &&<p>{avgScore}</p>}

    </div>
)

export default DetailedFilm;