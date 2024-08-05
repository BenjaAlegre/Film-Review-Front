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
        


        <a 
            href="#" 
            onClick={handleClick} 
            className="flex flex-col m-0.2 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer w-full md:w-1/3 lg:w-1/4"
        >
            <img 
                className="object-cover w-full h-96 rounded-t-lg md:h-72 lg:h-96" 
                src={POSTER_PATH + poster} 
                alt={title} 
            />
            <div className="flex flex-col justify-between p-2 leading-normal">
                <h1 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h1>
            </div>
        </a>
    )
}

export default MiniFilm;