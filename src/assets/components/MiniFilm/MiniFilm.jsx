import { POSTER_PATH } from "../../common/constants/poster_path.constants";

const MiniFilm = ({ poster, title }) => (
    <div>
        <img src={POSTER_PATH + poster} alt={title} />
        <p>{title}</p>
    </div>
)

export default MiniFilm;