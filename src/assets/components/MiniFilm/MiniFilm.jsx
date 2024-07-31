import { POSTER_PATH } from "../../common/constants/poster_path.constants";
import { useNavigate } from "react-router-dom"

const MiniFilm = ({ poster, title, filmID}) => {

    const navigate = useNavigate();
    
    const handleClick = (e) =>
    {
        console.log(filmID);
        e.preventDefault();
        navigate('/film',{
            state: filmID
        })
    }

    return (
        <div>
            <img onClick={handleClick} style={{ margin: "3%", height: "200px", maxHeight: "200px", width: "200px", maxWidth: "200px", objectFit: "contain" }} src={POSTER_PATH + poster} alt={title} />
            <p>{title}</p>
        </div>
    )
}

export default MiniFilm;