import React, { useContext, useEffect } from "react";
// import Auxillary from '../../hoc/Auxillary'
// import NavigationContainerStyle from './NavigationContainerStyle.module.css'
import Navbar from "../Navbar/Navbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import MobileDeviceContext from "../../contexts/MobileDeviceContext";

const NavigationContainer = (props) => {
  const MobileDeviceContext = useContext(MobileDeviceContext);
  useEffect(() => {
    const ReEvaluate = () => {
      if (MobileDeviceContext === true && window.innerWidth > 500)
        props.setNavbar();
    };
    console.log("added eventlistener");
    window.addEventListener("resize", ReEvaluate);
    return () => {
      window.removeEventListener("resize", ReEvaluate);
    };
  }, [props]);

  return (
    <>
      {/* Render navbar or sidedrawer according to the screen size  */}
      {MobileDeviceContext ? (
        <SideDrawer elements={props.elements} switched={props.switched} />
      ) : (
        <Navbar elements={props.elements} switched={props.switched} />
      )}
    </>
  );
};

export default NavigationContainer;
