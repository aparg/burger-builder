import React,{ Component, useContext } from 'react'
import Auxillary from '../../hoc/Auxillary'
import NavigationContainer from '../../components/Navigation/NavigationContainer/NavigationContainer'
import SideDrawerContext from '../../components/contexts/MobileDeviceContext'

class Layout extends Component{
    state={
        sideDrawer:false
    }

    //routes format: {Label1:href1, label2:href2}
    routes={"Home":'/',
            "About":'/aboutus',
            "Display orders": '/adminlogin'}

    switched = () => {
        let currentSideDrawer=this.state.sideDrawer
        this.setState({sideDrawer:!currentSideDrawer})
    }

    setNavbar= () => {
        this.setState({sideDrawer:false})
    }

    render(){
        return(   
            <Auxillary>
                <SideDrawerContext.Provider value={this.state.sideDrawer}>
                    <NavigationContainer elements={this.routes} switched={this.switched} setNavbar={this.setNavbar}/>
                    <div style={{marginTop: "60px"}}>
                    {this.props.children}
                    </div>
                </SideDrawerContext.Provider>
            </Auxillary> 
    )}

}

export default Layout