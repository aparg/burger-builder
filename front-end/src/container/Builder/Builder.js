import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import Aux from '../../hoc/Auxillary'
import BuildControls from '../../components/BuildControls/BuildControls'
import PurchasingContext from '../../components/contexts/PurchasingContext'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Modal from '../Modal/Modal'
import axios from '../../axios_orders'
import Spinner from '../../components/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


class Builder extends Component{
    state={
        ingredients:null,
        totalCost:20,
        purchased:false,
        loading:false
    }

    price={
        'cheese':20,
        'meat':30,
        'bacon':25,
        'salad':15,
    }

    

    addIngredients = (ingredient)=>{
        let copiedIngredients={...this.state.ingredients}
        copiedIngredients[ingredient]=this.state.ingredients[ingredient]+1
        console.log(this.state.ingredients)
        let totalCost=this.state.totalCost+this.price[ingredient]
        this.setState({ingredients:copiedIngredients,totalCost:totalCost})
    }

    removeIngredients = (ingredient)=>{
        if(this.state.ingredients[ingredient]>0){
            console.log('run')
            let copiedIngredients={...this.state.ingredients}
            copiedIngredients[ingredient]=this.state.ingredients[ingredient]-1
            this.setState({ingredients:copiedIngredients})
            let totalCost=this.state.totalCost-this.price[ingredient]
            this.setState({ingredients:copiedIngredients,totalCost:totalCost})
            this.costCalculator()
        }   
    }

    costCalculator = ()=>{
        
    }

    purchaseHandler = ()=>{
        this.setState({purchased:true})
    }

    backFromPurchasingState = ()=>{
        this.setState({purchased:false})
    }

    orderHandler = ()=>{
        this.setState({loading:true})
        axios.post('/orders',this.state.ingredients).then(
            this.setState({loading:false,purchased:false})
        )
    }

    ingredientDependents=<Spinner/>

    componentDidMount(){
        axios.get('/ingredients').then(
            res=>{
                this.setState({ingredients:res.data})
            }
        )
    }

    render(){
        if(this.state.ingredients){
            this.ingredientDependents=<Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <PurchasingContext.Provider value={{purchaseHandler:this.purchaseHandler}}>
                        <BuildControls 
                        ingredients={this.state.ingredients} 
                        addIng={this.addIngredients} 
                        removeIng={this.removeIngredients}
                        totalCost={this.state.totalCost}/>
                    </PurchasingContext.Provider>
                    <Modal show={this.state.purchased} back={this.backFromPurchasingState}>
                        <OrderSummary ingredients={this.state.ingredients} total={this.state.totalCost} purchase={this.orderHandler} loading={this.state.loading}/>
                    </Modal>
                </Aux>
        }
        return(
            <Aux>
                {this.ingredientDependents}
            </Aux>
        )}
    }

export default withErrorHandler(Builder,axios)

