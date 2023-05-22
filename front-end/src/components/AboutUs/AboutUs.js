import React from 'react'
import AboutUsStyle from './AboutUs.module.css'
import Burger from '../../assets/images/PosterBurger/aboutUsBurger.jpeg'

const AboutUs = () =>{
    return(
        <div className={AboutUsStyle.main}>
            <img alt="burger" className={AboutUsStyle.burger} src={Burger}></img>
            <h1>About Us</h1>
            <div className={AboutUsStyle.desc}>
                <p>This app is designed to break the conventional call and order process for ordering burgers. Now you can get your hands on a delicious Dad's burger without going through any hassle of explaining what you want on the expense of your phone data. 
                The best part is that you can see what you are ordering and customize your order so that it exactly fits the needs of your taste buds.</p>
                <p>The order is instantly stored in our database system and the Dad's Burgers team will be working on your order in a matter of seconds.</p>
            </div>
    </div>
    
    )
}
export default AboutUs


