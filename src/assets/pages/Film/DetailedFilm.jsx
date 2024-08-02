import { POSTER_PATH } from "../../common/constants/poster_path.constants";

const DetailedFilm = ({ title, description, poster, avgScore, genres }) => (

    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
            <img className="w-full h-96 md:w-1/3 object-cover" src={POSTER_PATH + poster} alt={title} />
            <div className="p-6 md:p-8">
                <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                <div className="text-lg font-semibold text-gray-900 dark:text-white">Calificación promedio: {avgScore}</div>
                <div>
                    {genres.map((genre) => (
                        <p className="mr-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{genre.genre.description}</p>
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default DetailedFilm;