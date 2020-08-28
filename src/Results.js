import React, { useState, useEffect } from 'react'
import './Results.css'
import VideoCard from './Videocard.js'
import axios from './axios'
import request from './request'


export default function Results({selectedOption}){
const [movies, setMovies] = useState([])


//Use this when the component mount or reload
useEffect(() => {

  //Fetch data from API
    const fetchData = async ()=> {
        const response = await axios.get(selectedOption)
        setMovies(response.data.results)
        console.log(response.data.results)
   }
   fetchData()


}, [selectedOption])
    return(
        <div className = 'results'>
            {movies.map(movie => <VideoCard key ={movie.id} movie = {movie}/>)}  
           
        </div>
    )
}