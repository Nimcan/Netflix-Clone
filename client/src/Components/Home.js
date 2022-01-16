import React from 'react'
import Banner from './Banner/Banner'
import Navbar from './Navbar/Navbar'
import Row from './Row/Row'

function Home() {
    return (
        <div>
            {/* Navbar Components */}
            <Navbar/>

            {/* Banner Components */}
            <Banner/>

            <Row/>
            <Row/>

        </div>
    )
}

export default Home
