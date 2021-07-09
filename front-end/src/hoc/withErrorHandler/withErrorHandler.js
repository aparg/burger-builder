import React from 'react'
import Modal from '../../container/Modal/Modal'
import Aux from '../Auxillary'

const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends React.Component{
        state={
            error:null
        }
        componentDidMount(){
            axios.interceptors.request.use((req)=>{
                this.setState({error:null})
                return req
            })

            axios.interceptors.response.use(null,error=>{
                this.setState({error:error})
            })
        }

        errorSeen = ()=>{
            this.setState({error:null})
        }

        render(){
            return(
                <Aux>
                    <Modal show={this.state.error} back={this.errorSeen}>
                       {this.state.error?"OOPS!"+this.state.error.message:console.log('noerror')}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>     
            )
        }
    }
}

export default withErrorHandler