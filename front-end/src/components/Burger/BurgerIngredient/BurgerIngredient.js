import React from 'react'
import BurgerStyle from './BurgerIngredient.module.css'
import PropTypes from 'prop-types'

const burgerIngredient = (props) => {
    let ingredient=null
    switch(props.ingredient){
        case ('bread-bottom'):
            ingredient=<div className={BurgerStyle.BreadBottom}></div>
            break
        case ('bread-top'):
            // console.log('hit')
            ingredient=(
                    <div className={BurgerStyle.BreadTop}>
                        <div className={BurgerStyle.Seeds1}></div>
                        <div className={BurgerStyle.Seeds2}></div>                        
                    </div>
                    )
            break
        case('meat'):
            ingredient=<div className={BurgerStyle.Meat}></div>
            break
        case('bacon'):
            ingredient=<div className={BurgerStyle.Bacon}></div>
            break
        case('cheese'):
            ingredient=<div className={BurgerStyle.Cheese}></div>
            break
        case('salad'):
            ingredient=<div className={BurgerStyle.Salad}></div>
            break
        default:
            ingredient=null
    }
    
    return ingredient
}

burgerIngredient.propTypes={
    ingredient: PropTypes.string 
}

export default burgerIngredient