import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { APIKey, baseURL } from '../../config/Key';
import { Container, Movie, MovieList } from './Home.styled';
import { Link } from 'react-router-dom';


function Home() {

const [ movies, setmovies] = useState(null) 
const image_path='https://image.tmdb.org/t/p/w500'



useEffect(() => {

    axios.get(`${baseURL}popular?api_key=${APIKey}`)
    .then((response) => {
        setmovies(response.data)
    })

}, [])


console.log(movies)

  return (
    <Container>
        <h1>CineMax</h1>
        <MovieList>

           {movies?.results.map(movie => {
               return (
                 <Movie key={movie.id}>
                   <Link to= {`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}/></Link>
                   <span>{movie.title}</span>
                 </Movie>
               )
           })}
    
        </MovieList>
    </Container>
  )
}

export default Home;