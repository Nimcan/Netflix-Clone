import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from 'axios'

function Banner() {

    const [movies, setMovies] = useState([])
    console.log(movies)

    function rabText(string, n){
        return string?.length > n ? string.substr(0, n-1) + '....' : string;
    }

    // const baseUrl = "https://api.themoviedb.org/3"

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/movie/550?api_key=c5cd3f72e5a23c5bdc0c1bf9e56b0319").then((res)=> setMovies(res.data))
    },[])

    return (
        <div className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies.backdrop_path}")`,
            backgroundPosition: "center center"
        }}>
            <div className='banner-content'>
                <h1 className='banner-movie-tittle'>{movies.tittle || movies.name || movies.original_name || movies.original_title}</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'><i class="fas fa-play"></i>Play</button>
                    <button className='banner-btn'><i class="fas fa-plus"></i>My List</button>
                </div>
                <p className='banner-desc'>{rabText (`${movies.overview}`, 150)}
                </p>
            </div>

            <div className='banner-fadebottom'/>
            
        </div>
    )
}

export default Banner
