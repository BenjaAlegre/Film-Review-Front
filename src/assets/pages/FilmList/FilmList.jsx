import { useEffect, useState } from "react";
import { API_PATH_FILMS, API_PATH_FILMS_GENRE, API_PATH_FILMS_TITLE, API_PATH_FILMS_YEAR, API_PATH_GENRES } from "../../common/constants/api_path.constants";
import { getData } from "../../common/utils/getData";
import MiniFilm from "../../components/MiniFilm/MiniFilm";

const FilmList = () => {

    let [title, setTitle] = useState('');
    let [year, setYear] = useState('');
    let [genres, setGenres] = useState([]);
    let [selectedGenre, setSelectedGenre] = useState('');
    let [films, setFilms] = useState([]);

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

    const getFilmsByTitle = async (title) => {
        const filmData = await getData(API_PATH_FILMS_TITLE + `?title=${title}`);
        setFilms(filmData);
    };

    const getFilmsByYear = async (year) => {
        const filmData = await getData(API_PATH_FILMS_YEAR + `?year=${year}`);
        setFilms(filmData);
    };

    const getFilmsByGenre = async (genre) => {
        const filmData = await getData( API_PATH_FILMS_GENRE +`?genre=${genre}`);
        setFilms(filmData);
    };

    const handleSubmitTitle = (e) => {
        e.preventDefault();
        try {
            console.log('Movie Title:', title);
            getFilmsByTitle(title);
        } catch (error) {
            console.log('Failed: ' + error.message);
        }
    };

    const handleSubmitYear = (e) => {
        e.preventDefault();
        try {
            console.log('Release Year:', year);
            getFilmsByYear(year);
        } catch (error) {
            console.log('Failed: ' + error.message);
        }
    };

    const handleGenreChange = (e) => {
        setSelectedGenre(e.target.value);
    };

    const handleSubmitGenre = (e) => {
        e.preventDefault();
        try {
            console.log('Selected Genre:', selectedGenre);
            getFilmsByGenre(selectedGenre);
        } catch (error) {
            console.log('Failed: ' + error.message);
        }
    };

    return (
        <div className="max-w-lg mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Search a Film</h2>
            <form onSubmit={handleSubmitTitle} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">Movie Title</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the movie title"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
            <form onSubmit={handleSubmitYear} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="year" className="text-sm font-medium text-gray-700 mb-1">Release Year</label>
                    <input
                        type="number"
                        id="year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter the release year"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
            <form onSubmit={handleSubmitGenre} className="space-y-4">
                <label htmlFor="genres" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Select a genre
                </label>
                <select
                    id="genres"
                    value={selectedGenre}
                    onChange={handleGenreChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="" disabled>
                        Choose a genre
                    </option>
                    {genres.map((genre) => (
                        <option key={genre.id} value={genre.description}>
                            {genre.description}
                        </option>
                    ))}
                </select>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
            <div>
                <h1>Film List</h1>
                <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-between" }}>
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
        </div>
    );
}

export default FilmList;
