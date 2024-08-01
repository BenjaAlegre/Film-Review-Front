import { useNavigate } from "react-router-dom";

const SliderPoster = ({filmID, src }) =>
{
    const navigate = useNavigate();

    const handlePosterClick = (e) => {
        navigate('/film', {
          state: filmID
        })
      }

      return(
      <img onClick={handlePosterClick} src={src} className="block w-full h-full"/>
      )
}

export default SliderPoster;