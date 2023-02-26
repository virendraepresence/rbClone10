import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import MovingBanner from "./MovingBanner";
import UpperHeadNavbar from './UpperHeadNavbar';

function Home(){
    return (
        <>
            <div className="container">
                <UpperHeadNavbar />
                <MovingBanner/>

                <Cards/>

                
                <div className="container">
                    
                    <Footer/>

                </div>

                
            </div>
        </>
        
        
    )
}   

export default Home;