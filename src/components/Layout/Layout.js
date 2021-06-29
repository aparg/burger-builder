import React,{ Component } from 'react'
import Auxillary from '../../hoc/Auxillary'
import NavigationContainer from '../Navigation/NavigationContainer/NavigationContainer'
// import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
// import NavigationBar from '../Navigation/NavigationContainer/NavigationContainer'

class Layout extends Component{
    state={
        sideDrawer:false
    }

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
                <NavigationContainer elements={{Home:0,About:0}} sideDrawer={this.state.sideDrawer} switched={this.switched} setNavbar={this.setNavbar}/>
                <p>Other</p>
                {this.props.children}
            </Auxillary> 
    )}
    
}

export default Layout