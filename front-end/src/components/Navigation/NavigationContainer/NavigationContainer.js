import React, { useEffect } from 'react'
// import Auxillary from '../../hoc/Auxillary'
import NavigationContainerStyle from './NavigationContainerStyle.module.css'
import Navbar from '../Navbar/Navbar'
import SideDrawer from '../SideDrawer/SideDrawer'

const NavigationContainer = (props) => {


    useEffect(() => {
        window.addEventListener('resize',ReEvaluate)
        function ReEvaluate(){
            if(props.sideDrawer===true && window.innerWidth>500)props.setNavbar()
        }
        return () => {
            window.removeEventListener('resize',ReEvaluate)
        }
        }, [props])

    return(
        <div className={NavigationContainerStyle.main}>

            {/* Render navbar or sidedrawer according to the screen size  */}
            {
                props.sideDrawer?
                <SideDrawer elements={Object.keys(props.elements)} switched={props.switched}/>:
                <Navbar elements={Object.keys(props.elements)} switched={props.switched}/>
            }
        </div>
    )


}

export default NavigationContainer