import React from "react";
import PosterBurgerImg from "../../assets/images/PosterBurger/PosterBurger.png"
import DeliveryIcon from "../../assets/images/icons/delivery.png"
import Customize from "../../assets/images/icons/customize.png"
import PosterStyle from "./Poster.module.css"
import QualityCertification from "../../assets/images/icons/quality.png"

function Poster(){
    return(
        <>
            <div className={PosterStyle.PosterContainer}>
                <div className={PosterStyle.MainContent}>
                    <div className={PosterStyle.Quote}>Making Burgers customized <br/> to YOUR taste buds</div>
                    <button className={PosterStyle.OrderButton} onClick={()=>document.getElementById("BuildBurger").scrollIntoView({behavior:"smooth"})}>Order Now!</button>
                </div>
                <img style={{width:"100%"}} src={PosterBurgerImg} alt="Juicy Burger"/>
            </div>
            <div className={PosterStyle.Specialities}>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Fast delivery</div>
                    <img src={DeliveryIcon} style={{width:"40%", height:"40%", marginBottom:"20px", marginTop:"36px"}} alt="delivery van"/>
                    <div className={PosterStyle.Content}>Delivery within 30 minutes of order</div>
                </div>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Customizable to the granular level</div>
                    <img src={Customize} style={{width:"40%", height:"35%", marginTop:"15px", marginBottom:"20px"}} alt="customize"/>
                    <div className={PosterStyle.Content}>Paint your own canvas</div>
                </div>
                <div className={PosterStyle.feature}>
                    <div className={PosterStyle.Title}>Quality assured</div>
                    <img src={QualityCertification} style={{width:"30%", height:"40%", margin:"15px", marginBottom:"20px", marginTop:"20px"}} alt="quality"/>
                    <div className={PosterStyle.Content}>Each ingredient is carefully handpicked by following all food standards</div>
                </div>
            </div>
        </>
        
    )
}

export default Poster