import React from 'react'
import FormElementStyle from './FormElement.module.css'

const FormElement = (props)=>{
    let inputElement
    let inputClasses = [FormElementStyle.Input]
    let buttonClasses = [FormElementStyle.Button]
    if(!props.valid){
        inputClasses.push(FormElementStyle.inputError)
        buttonClasses.push(FormElementStyle.buttonDisabled)
    }
    
    switch(props.inputtype){
        case "input":
            inputElement = <input className={inputClasses.join(' ')} onChange={props.changes} {...props.elementConfig}/>
            break;
        case "button":
            inputElement = <button className={buttonClasses.join(' ')} {...props.elementConfig}>{props.elementConfig.placeholder}</button>
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} onChange={props.changes} {...props.elementConfig}/>
            break;
    }



    return(
        <React.Fragment>{inputElement}</React.Fragment>
    )
}

export default FormElement