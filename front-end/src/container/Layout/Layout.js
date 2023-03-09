import React,{ Component } from 'react'
import Auxillary from '../../hoc/Auxillary'
import NavigationContainer from '../../components/Navigation/NavigationContainer/NavigationContainer'
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// import NavigationBar from '../Navigation/NavigationContainer/NavigationContainer'

class Layout extends Component{
    state={
        sideDrawer:false
    }

    //routes format: {Label1:href1, label2:href2}
    routes={Home:'/',
            About:'/aboutus'}

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
                <NavigationContainer elements={this.routes} sideDrawer={this.state.sideDrawer} switched={this.switched} setNavbar={this.setNavbar}/>
                {this.props.children}
            </Auxillary> 
    )}
    
}

export default Layout