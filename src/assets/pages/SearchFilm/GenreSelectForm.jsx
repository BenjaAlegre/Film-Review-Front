import { useEffect, useState } from "react";
import { getData } from "../../common/utils/getData";
import { API_PATH_GENRES } from "../../common/constants/api_path.constants";

const GenreSelectForm = ({ setFilms }) => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const genreData = await getData(API_PATH_GENRES);
                setGenres(genreData);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Selected Genre:', selectedGenre);
            const filmData = await getData(`http://localhost:3000/films/genre?genre=${selectedGenre}`);
            setFilms(filmData);
        } catch (error) {
            console.error('Failed to fetch films:', error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <label htmlFor="genres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Selecciona un género 
            </label>
            <select
                id="genres"
                value={selectedGenre}
                onChange={handleGenreChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option value="" disabled>
                    Elige un género
                </option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.description}>
                        {genre.description}
                    </option>
                ))}
            </select>
            <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4"
            >
                Buscar
            </button>
        </form>
    );
};

export default GenreSelectForm;
