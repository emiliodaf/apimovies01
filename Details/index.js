import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { APIKey, baseURL } from '../../config/Key'
import { Container } from '../Details/Details.styled'


function Details() {

  const {id} = useParams(); 
  
  const [movie, setMovie] = useState()
  const image_path='https://image.tmdb.org/t/p/w500'
 

  useEffect(() =>{

    axios.get(`${baseURL}${id}?api_key=${APIKey}`)
    .then((response) => {
     
      const {title, poster_path, overview, release_date, vote_average} = response.data

      const data = {
        id,
        title,
        sinopse: overview, 
        image:`${image_path}${poster_path}`,
        releaseDate: release_date,
        vote_average, 
        
      }
      
      setMovie(data)
  })

  }, [id])

  return (

    <Container>
      {!movie && (<p>Loading...</p>)}
      {movie && (
        <>
          <div className='movie'>
            <img src={movie.image} alt={movie.sinopse} />
          </div>
        <div className='details'>
          <h1>{movie.title}</h1> 
          <span>Sinopse:{movie.sinopse}</span> 
          <span>{movie.vote_average}</span>
          <span className='release_date'>Release_date:{movie.releaseDate}</span> 
              <Link to='/'><button>Go back</button></Link> 
        </div>
        </>

      )}
  </Container>
    
  )
}

export default Details