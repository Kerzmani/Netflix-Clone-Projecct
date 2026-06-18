import React, { use, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams, useNavigate } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();

  const navigate = useNavigate();


    const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmE0MzE0ZjRmZjgzNGExYjk2M2IyOTI2M2VhMjQyNyIsIm5iZiI6MTc4MTEzNjY3MC4wMTgsInN1YiI6IjZhMjlmZDFlNDFjNzY0MGEyYWFmOGFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2n3OuK_C1ea0qYlPz_0CEJgcMWlI-WUCSJqPks8KyZw",
    },
  };

  useEffect(() => { 
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options,
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, [])
  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back" className="back-arrow" onClick={()=>{navigate(-1)}} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10 )}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player
