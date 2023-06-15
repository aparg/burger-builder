import React from 'react'
import AboutUsStyle from './AboutUs.module.css'
import Burger from '../../assets/images/PosterBurger/aboutUsBurger.jpeg'
import Footer from '../Footer/Footer'

const AboutUs = () =>{
    return(
        <div className={AboutUsStyle.main}>
            <img alt="burger" className={AboutUsStyle.burger} src={Burger}></img>
            <h1>About Us</h1>
            <div className={AboutUsStyle.desc}>
                <p>Welcome to Dad's Burgers!</p>

                <p>At Dad's Burgers, we take pride in serving mouthwatering burgers that are sure to satisfy your cravings. Located in the heart of Kathmandu, our branch offers a cozy and inviting atmosphere where you can indulge in delicious food and create lasting memories with friends and family.</p>

                <p>Our burgers are crafted with the finest ingredients, ensuring that each bite is packed with flavor and quality. We source locally whenever possible, supporting local farmers and businesses while also delivering the freshest ingredients to our customers. From juicy beef patties to succulent chicken and flavorful vegetarian options, we have something to suit every taste and preference.</p>

                <p>But it's not just about the burgers at Dad's Burgers. We believe in creating a complete dining experience for our guests. Our menu includes a variety of sides and accompaniments, from crispy golden fries to creamy milkshakes and refreshing beverages. Whether you're in the mood for a classic cheeseburger, a spicy chicken burger, or a mouthwatering veggie burger, you can pair it with your favorite sides to make it a truly satisfying meal.  </p>

                <p>This app is designed to break the conventional call and order process for ordering burgers. Now you can get your hands on a delicious Dad's burger without going through any hassle of explaining what you want on the expense of your phone data. 
                The best part is that you can see what you are ordering and customize your order so that it exactly fits the needs of your taste buds.</p>

                <p>All our ingredients are FDA approved and handpicked. We have a protocol with a series of standard checks to ensure the quality. We also have a major tieup with the leading delivery service of Nepal. So, rest assured! You will not go hungry.</p>
                
                <p>The order is instantly stored in our database system and the Dad's Burgers team will be working on your order in a matter of seconds.</p>
            </div>
            <Footer/>
    </div>
    
    )
}
export default AboutUs


