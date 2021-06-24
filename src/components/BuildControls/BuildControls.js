import React,{ useContext } from 'react'
import BuildControl from './BuildControl'
import BuildControlsStyle from './BuildControls.module.css'
import PurchasingContext from '../contexts/PurchasingContext'


const BuildControls = (props) => {
    const labelDefinition = [
        {label:'Cheese',type:'cheese'},
        {label:'Meat',type:'meat'},
        {label:'Bacon',type:'bacon'},
        {label:'Salad',type:'salad'}
    ]

    let costDisplayer=[BuildControlsStyle.costDisplayer]
    if(props.totalCost>0)costDisplayer.push(BuildControlsStyle.active)

    const context = useContext(PurchasingContext) 

    return(
        <div className={BuildControlsStyle.main}>
            
            {labelDefinition.map((ing,ind) => {
                let disableInfo = props.ingredients[ing.type]===0
                // console.log(disableInfo)
                return <BuildControl 
                        type={ing.label} add={() => props.addIng(ing.type)} 
                        remove={() => props.removeIng(ing.type)} key={ing+ind} 
                        disabling={disableInfo}/>
            })}

            <div className={costDisplayer.join(' ')}><strong>Total Cost : </strong>{props.totalCost}</div>
            <button className={BuildControlsStyle.orderBtn} onClick={context.purchaseHandler}>Order!</button>
        </div>
    )
}

export default BuildControls

