import React from "react";
import PosterBurgerImg from "../../assets/images/PosterBurger/PosterBurger.png"
import PosterStyle from "./Poster.module.css"

function Poster(){
    return(
        <>
            <div class={PosterStyle.PosterContainer}>
                <div className={PosterStyle.MainContent}>
                    <div className={PosterStyle.Quote}>Making Burgers customized <br/> to YOUR taste buds</div>
                    <button className={PosterStyle.OrderButton} onClick={()=>document.getElementById("BuildBurger").scrollIntoView({behavior:"smooth"})}>Order Now!</button>
                </div>
                <img src={PosterBurgerImg}/>
            </div>
            <div className={PosterStyle.Specialities}>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Fast delivery</div>
                    <div className={PosterStyle.Content}>Delivery within 30 minutes of order</div>
                </div>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Customizable to the granular level</div>
                    <div className={PosterStyle.Content}>Paint your own canvas</div>
                </div>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Authentic Taste</div>
                    <div className={PosterStyle.Content}>The taste of each ingredient is specially curated for a nepali tastebud</div>
                </div>
            </div>
        </>
        
    )
}

export default Poster