import FooterStyle from "./Footer.module.css"
import LogoImg from "../../assets/images/Logo/Logo.png"

function Footer(){
    return(
        <div className={FooterStyle.FooterContainer}>
            <div className={FooterStyle.FooterFlexContainer}>
                <img style={{height:"400px", overflow:"hidden"}} src={LogoImg} alt="Logo"/>
                <div style={{backgroundColor:"grey", width:"0.5px", marginTop:"30px",marginBottom:"30px"}}></div>
                <div className={FooterStyle.Title}>
                    <h2 style={{textDecoration:"underline"}}>CONTACT US</h2>
                    Email: apargtm@gmail.com<br/>
                    Contact No.: 9191425902
                </div>
                <div style={{backgroundColor:"grey", width:"0.5px", marginTop:"30px",marginBottom:"30px"}}></div>
                <div className={FooterStyle.Title}>
                    <h2 style={{textDecoration:"underline"}}>OTHER LINKS</h2>
                    <a href="/aboutus">About Us</a><br></br>
                    <a href="https://github.com/aparg/">Developer's Github</a>
                </div>
            </div>
            <span className={FooterStyle.Copyright}>All rights reserved 2023 &copy; <a href="https://github.com/aparg/">Apar Gautam</a></span>
        </div>
        

    )
}

export default Footer