import React from 'react'
import "./Banner.css"

function Banner() {

    function rabText(string, n){
        return string?.length > n ? string.substr(0, n-1) + '....' : string;
    }
    return (
        <div className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("http://localhost:3000/images/avatar.jpg")`,
            backgroundPosition: "center center"
        }}>
            <div className='banner-content'>
                <h1 className='banner-movie-tittle'>The Movie Name</h1>
                <div className='banner-btns'>
                    <button className='banner-btn'><i class="fas fa-play"></i>Play</button>
                    <button className='banner-btn'><i class="fas fa-plus"></i>My List</button>
                </div>
                <p className='banner-desc'>{rabText (`This is the movie description
                This is the movie description
                This is the movie description
                This is the movie description`, 150)}
                </p>
            </div>

            <div className='banner-fadebottom'/>
            
        </div>
    )
}

export default Banner
