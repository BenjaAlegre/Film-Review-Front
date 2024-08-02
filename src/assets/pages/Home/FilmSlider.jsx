import { useEffect, useState } from 'react';
import { API_PATH_FILMS } from '../../common/constants/api_path.constants';
import { getPosterData } from '../../common/utils/getData';
import { POSTER_PATH } from '../../common/constants/poster_path.constants';
import SliderPoster from './SliderPoster';

const FilmSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [films, setFilms] = useState(null);
  const posterLimit = 5;
  useEffect(() => {
    getPosters()
  }, [])

  const getPosters = async () => {
    const filmData = await getPosterData(API_PATH_FILMS, posterLimit)
    setFilms(filmData);
    console.log(filmData);
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!films) {
    return <div>Cargando...</div>
  }

  const items = [
    {poster: POSTER_PATH + films[0].poster, id: films[0].id},
    {poster: POSTER_PATH + films[1].poster, id: films[1].id},
    {poster: POSTER_PATH + films[2].poster, id: films[2].id},
    {poster: POSTER_PATH + films[3].poster, id: films[3].id},
    {poster: POSTER_PATH + films[4].poster, id: films[4].id},
  ];

  return (
    <div id="controls-carousel" className="relative w-full" data-carousel="static">
      <div className="relative h-80 overflow-hidden rounded-lg md:h-[32rem]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute duration-700 ease-in-out w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index === currentIndex ? 'block' : 'hidden'}`}
            data-carousel-item={index === currentIndex ? 'active' : ''}
          >
            <SliderPoster filmID={item.id} src={item.poster} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrevClick}
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNextClick}
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};




export default FilmSlider;