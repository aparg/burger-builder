import React from 'react'
import BurgerStyle from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    console.log(props.ingredients)
    let forEmptyBurger=null
    const ingredients=Object.keys(props.ingredients)
                        .map((ing)=>{
                            // console.log(ing)
                            return [...Array(props.ingredients[ing])]
                                .map((_,indexNum)=>{
                                    return <BurgerIngredient key={ing+indexNum} ingredient={ing}/>
                                })
                            })
                        .reduce((arr,el)=>{
                            return arr.concat(el)
                        },[])  
    if(ingredients.length===0){
        forEmptyBurger=<div>Start adding ingredients</div>
    }  
    return(
        <div className={BurgerStyle.Burger}>
            <BurgerIngredient ingredient='bread-top'/>
            {ingredients}
            {forEmptyBurger}
            <BurgerIngredient ingredient='bread-bottom'/>
            
        </div>
    )
}

export default burger