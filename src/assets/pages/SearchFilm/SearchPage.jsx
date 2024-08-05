import { useState } from "react";
import { API_PATH_FILMS_TITLE, API_PATH_FILMS_YEAR } from "../../common/constants/api_path.constants";
import { getData } from "../../common/utils/getData";
import MiniFilm from "../../components/MiniFilm/MiniFilm";
import GenreSelectForm from "./GenreSelectForm";


const SearchPage = () => {

    let [title, setTitle] = useState('');
    let [year, setYear] = useState('');
    let [films, setFilms] = useState([])


    const getFilmsByTitle = async (title) => {
        const filmData = await getData(API_PATH_FILMS_TITLE + `?title=${title}`)
        setFilms(filmData);
    }
    const getFilmsYear = async (year) => {
        const filmData = await getData(API_PATH_FILMS_YEAR + `?year=${year}`)
        setFilms(filmData);
    }
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

            getFilmsYear(year.toString());

          } catch (error) {
            console.log('Failed: ' + error.message);
          }
        
    };
  
    return (
        <>
      <div className="max-w-lg mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Busca una película</h2>
        <form onSubmit={handleSubmitTitle} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-medium text-gray-700 mb-1">Título de la película</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Elige el título de la película"
              required
            />
          </div>
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Buscar
          </button>
        </form>
        <form onSubmit={handleSubmitYear} className="space-y-4">
  
          <div className="flex flex-col">
            <label htmlFor="year" className="text-sm font-medium text-gray-700 mb-1">Año de estreno</label>
            <input
              type="number"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Selecciona el año de estreno"
              required
            />
          </div>
      
  
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Buscar
          </button>
        </form>
        <GenreSelectForm setFilms={setFilms}></GenreSelectForm>
        </div>
        <div>
        <h1>LISTADO DE PELICULAS</h1>
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
    </>
    );
}

export default SearchPage;