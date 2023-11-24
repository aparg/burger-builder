import React, { useContext } from "react";
import PosterBurgerImg from "../../assets/images/PosterBurger/PosterBurger.png"
import DeliveryIcon from "../../assets/images/icons/delivery.png"
import Customize from "../../assets/images/icons/customize.png"
import PosterStyle from "./Poster.module.css"
import QualityCertification from "../../assets/images/icons/quality.png"
import MobileDeviceContext from "../contexts/MobileDeviceContext";

function Poster(){
    MobileDevice = useContext(MobileDeviceContext)
    if(!MobileDevice){
        PosterContainerClass = PosterStyle.PosterContainer
        MainContentClass = PosterStyle.MainContent
        QuoteClass = PosterStyle.Quote
        SpecialitiesClass = PosterStyle.Specialities
        FeatureClass = PosterStyle.Feature
    }
    else{
        PosterContainerClass = PosterStyle.PosterContainerMobile
        MainContentClass = PosterStyle.MainContentMobile
        QuoteClass = PosterStyle.QuoteMobile
        SpecialitiesClass = PosterStyle.SpecialitiesMobile
        FeatureClass = PosterStyle.FeatureMobile
    }
    return(
        <>
            <div className={PosterContainerClass}>
                <div className={MainContentClass}>
                    <div className={QuoteClass}>Making Burgers customized <br/> to YOUR taste buds</div>
                    <button className={PosterStyle.OrderButton} onClick={()=>document.getElementById("BuildBurger").scrollIntoView({behavior:"smooth"})}>Order Now!</button>
                </div>
                <img src={PosterBurgerImg} className={PosterStyle.BurgerImg} alt="Juicy Burger"/>
            </div>
            <div className={SpecialitiesClass}>
                <div className={FeatureClass}>
                    <div className={PosterStyle.Title}>Fast delivery</div>
                    <img src={DeliveryIcon} style={{width:"60%", height:"40%", marginBottom:"20px", marginTop:"36px"}} alt="delivery van"/>
                    <div className={PosterStyle.Content}>Delivery within 30 minutes of order</div>
                </div>
                <div className={FeatureClass}>
                    <div className={PosterStyle.Title}>Customizable to the granular level</div>
                    <img src={Customize} style={{width:"40%", height:"35%", marginTop:"15px", marginBottom:"20px"}} alt="customize"/>
                    <div className={PosterStyle.Content}>Paint your own canvas</div>
                </div>
                <div className={FeatureClass}>
                    <div className={PosterStyle.Title}>Quality assured</div>
                    <img src={QualityCertification} style={{width:"30%", height:"40%", margin:"15px", marginBottom:"20px", marginTop:"20px"}} alt="quality"/>
                    <div className={PosterStyle.Content}>Each ingredient is carefully handpicked by following all food standards</div>
                </div>
            </div>
        </>
        
    )
}

export default Poster