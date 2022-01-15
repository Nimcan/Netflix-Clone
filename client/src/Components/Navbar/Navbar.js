
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
                <img src="./images/netflix-logo.png" className="nav-logo"/>
                <img src="./images/netflix-avatar.png" className="nav-avatar"/>
              
            </div>
        </div>
        
            
    )
}
