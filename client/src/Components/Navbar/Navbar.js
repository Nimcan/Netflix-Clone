
import { useEffect, useState } from "react"
import "./navbar.css"

export default function Navbar() {
    const [navSlide, showNavSlide] = useState(false)

    function Slide(){
        if(window.scrollY > 100){
            showNavSlide(true)
        }else {
            showNavSlide(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", Slide)

        return()=> window.removeEventListener("scroll", Slide)
    },[])
    return (

        <div className={`navbar ${navSlide && "nav-black"}`}>

            <div className="nav-container">

                <div className="nav-left">
                    <img src="./images/netflix-logo.png" className="nav-logo"/>
                   <ul>
                       <li><a href="#">Home</a></li>
                       <li><a href="#">Series</a></li>
                       <li><a href="#">Movies</a></li>
                       <li><a href="#">Public News</a></li>
                       <li><a href="#">My List</a></li>
                   </ul>

                </div>
                <div className="nav-right">
                    <i class="fas fa-bell"></i>
                    <img src="./images/netflix-avatar.png" className="nav-avatar"/>
                </div>
            </div>
        </div>
        
            
    )
}
