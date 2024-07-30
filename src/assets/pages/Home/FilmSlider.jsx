import  { useState } from 'react';
const FilmSlider = () =>
{   
      const [currentIndex, setCurrentIndex] = useState(1);
    
      const items = [
        'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/044.webp',
        'https://mdbcdn.b-cdn.net/img/new/slides/045.webp',
      ];
    
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
    
      return (
        <div id="controls-carousel" className="relative w-full" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {items.map((src, index) => (
              <div
                key={index}
                className={`absolute duration-700 ease-in-out w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                  index === currentIndex ? 'block' : 'hidden'
                }`}
                data-carousel-item={index === currentIndex ? 'active' : ''}
              >
                <img src={src} className="block w-full h-full object-cover" alt={`Carousel item ${index + 1}`} />
              </div>
            ))}
          </div>
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrevClick}
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNextClick}
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      );
    };
    
    


export default FilmSlider;