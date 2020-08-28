import React from 'react';
import './Nav.css'
import Movie from './request'

export default function Nav({setSelectedOption}) {
    return (
        <div className = "nav">
            <h4 onClick = {() => setSelectedOption(Movie.fetchTrending)}>Trending</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchTopRated)}>Top Rated</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchActionMovies)}>Action</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchComedyMovies)}>Comedy</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchHorrorMovies)}>Horror</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchRomanceMovies)}>Romance</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchMystery)}>Mystery</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchScifi)}>Sci-fi</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchWestern)}>Western</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchAnimaton)}>Animation</h4>
            <h4 onClick = {() => setSelectedOption(Movie.fetchHome)}>Home</h4>
        </div>
    )
}
