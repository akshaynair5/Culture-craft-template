import Navbar from "../../components/navbar/navbar"
import History from "../../components/history/history"
import Dance from "../../components/dance/dance"
import Food from "../../components/food/food"
import Places from "../../components/places/places"
import React, { useRef } from 'react';
import './home.css'


function Home(){
    const his = useRef(null)
    const dan = useRef(null)
    const food = useRef(null)
    const cul = useRef(null)
    return(
        <div className="home">
            <Navbar historyRef = {his} danceRef = {dan} foodRef = {food} cultureRef ={cul} />
            <p className="heading"><span style={{color:'orange'}}>Indian</span> Culture</p>
            <div className="components">
                <div ref={his}>
                    <History/>
                </div>
                <div ref={dan}>
                    <Dance/>
                </div>
                <div ref={food}>
                    <Food/>
                </div>
                <div ref={cul}>
                    <Places/>
                </div>
            </div>
        </div>
    )
}
export default Home