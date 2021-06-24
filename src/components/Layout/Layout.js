import React,{ Component } from 'react'
import Auxillary from '../../hoc/Auxillary'
import Navbar from '../Navbar/Navbar'

class Layout extends Component{

    render(){
        return(   
            <Auxillary>
                <Navbar elements={['Home','About']}/>
                <p>Other</p>
                {this.props.children}
            </Auxillary> 
    )}
    
}

export default Layout