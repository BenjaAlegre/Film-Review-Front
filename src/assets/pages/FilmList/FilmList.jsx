import { useEffect, useState } from "react";
import { API_PATH_FILMS, API_PATH_FILMS_GENRE, API_PATH_FILMS_TITLE, API_PATH_FILMS_YEAR, API_PATH_GENRES } from "../../common/constants/api_path.constants";
import { getData } from "../../common/utils/getData";
import MiniFilm from "../../components/MiniFilm/MiniFilm";

const FilmList= () => {
    const [searchType, setSearchType] = useState('title');
    const [searchValue, setSearchValue] = useState('');
    const [genres, setGenres] = useState([]);
    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms();
        fetchGenres();
    }, []);

    const getFilms = async () => {
        const filmData = await getData(API_PATH_FILMS);
        setFilms(filmData);
    };

    const fetchGenres = async () => {
        try {
            const genreData = await getData(API_PATH_GENRES);
            setGenres(genreData);
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        let filmData = [];
        try {
            if (searchType === 'title') {
                filmData = await getData(API_PATH_FILMS_TITLE + `?title=${searchValue}`);
            } else if (searchType === 'year') {
                filmData = await getData(API_PATH_FILMS_YEAR + `?year=${searchValue}`);
            } else if (searchType === 'genre') {
                filmData = await getData(API_PATH_FILMS_GENRE + `?genre=${searchValue}`);
            }
            setFilms(filmData);
        } catch (error) {
            console.log('Failed: ' + error.message);
        }
    };

    return (
        <>
        <div className=" max-w-lg mx-auto p-2 m-1">
            <h2 className="text-4xl font-semibold mb-4">Buscar una pelicula</h2>
            <form onSubmit={handleSearch} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="searchType" className="text-sm font-medium text-gray-700 mb-1">Buscar por:</label>
                    <select
                        id="searchType"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="title">Título</option>
                        <option value="year">Año</option>
                        <option value="genre">Género</option>
                    </select>
                </div>
                {searchType === 'genre' ? (
                    <div className="flex flex-col">
                        <label htmlFor="searchValue" className="text-sm font-medium text-gray-700 mb-1">Selecciona un género</label>
                        <select
                            id="searchValue"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="" disabled>Selecciona un género</option>
                            {genres.map((genre) => (
                                <option key={genre.id} value={genre.description}>
                                    {genre.description}
                                </option>
                            ))}
                        </select>
                    </div>
                ) : (
                    <div className="flex flex-col">
                        <label htmlFor="searchValue" className="text-sm font-medium text-gray-700 mb-1">{searchType === 'title' ? 'Título' : 'Año de estreno'}</label>
                        <input
                            type={searchType === 'year' ? 'number' : 'text'}
                            id="searchValue"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={`Introducir el ${searchType === 'title' ? 'título' : 'año de estreno'}`}
                            required
                        />
                    </div>
                )}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Buscar
                </button>
            </form>
           
        </div>
        <div className="grid grid-flow gap-5" >
                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between", padding: "1em" }}>
                    {films.map((film) => (
                        <MiniFilm
                            key={film.id}
                            poster={film.poster}
                            title={film.title}
                            filmID={film.id}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}

export default FilmList;
