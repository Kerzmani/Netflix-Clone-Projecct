import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/cards_data';
import { Link } from 'react-router-dom';



const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmE0MzE0ZjRmZjgzNGExYjk2M2IyOTI2M2VhMjQyNyIsIm5iZiI6MTc4MTEzNjY3MC4wMTgsInN1YiI6IjZhMjlmZDFlNDFjNzY0MGEyYWFmOGFlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2n3OuK_C1ea0qYlPz_0CEJgcMWlI-WUCSJqPks8KyZw",
  },
};

const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollBy({
      left: event.deltaY,
      behavior: "smooth"
    }
    ) 
  };

  useEffect(() => {

     fetch(
       `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
       options,)
       .then((res) => res.json())
       .then((res) => {
         if (res.results) {
           setApiData(res.results);
         } else {
           console.error("TMDB API error:", res);
         }
       })
       .catch((err) => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener("wheel", handleWheel);
    
    return () => currentRef.removeEventListener('wheel', handleWheel);
  }, [category]);
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) =>{
          return (
            <Link to= {`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} className="card-img" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
        
      </div>
      
    </div>
  )
}

export default TitleCards
