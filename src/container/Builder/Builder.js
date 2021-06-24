import React, {Component} from 'react'
import Burger from '../../components/Burger/Burger'
import Auxillary from '../../hoc/Auxillary'
import BuildControls from '../../components/BuildControls/BuildControls'
import PurchasingContext from '../../components/contexts/PurchasingContext'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Modal from '../Modal/Modal'


class Builder extends Component{
    state={
        ingredients:{
                    'cheese':0,
                    'meat':0,
                    'bacon':0,
                    'salad':0,
                    },
        totalCost:20,
        purchased:false
    }

    price={
        'cheese':20,
        'meat':30,
        'bacon':25,
        'salad':15,
    }

    
    addDelIngContext = React.createContext({add:null,remove:null})
    provideAddDel = this.addDelIngContext.Provider

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

    render(){
    
    return(
        <Auxillary>

            <Burger ingredients={this.state.ingredients}/>

            <PurchasingContext.Provider value={{purchaseHandler:this.purchaseHandler}}>
                <BuildControls 
                ingredients={this.state.ingredients} 
                addIng={this.addIngredients} 
                removeIng={this.removeIngredients}
                totalCost={this.state.totalCost}/>
            </PurchasingContext.Provider>
            <Modal purchased={this.state.purchased} back={this.backFromPurchasingState}>
                <OrderSummary ingredients={this.state.ingredients} total={this.state.totalCost}/>
            </Modal>
            
        </Auxillary>
    )}

}

export default Builder

