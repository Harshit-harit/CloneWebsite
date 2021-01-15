import React from "react"
import { Route , Switch} from "react-router-dom";
import Images from "./Images"
import Navba from "./Navba"
import About from "./about"


const Home=()=>
{
    return (

        <>
        <Navba/>
        <Images />
        {/* <h1>Home Page</h1> */}
        <About/>
        
        </>
    )

}

export default Home;