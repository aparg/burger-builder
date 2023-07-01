import React, { useState } from "react";
import axios from "axios";
import AdminLoginStyle from "./AdminLogin.module.css"
import FormElement from "./FormElement.jsx"

async function LogIn(credentials){
    return await axios.post('/logincredentials',credentials).then(res=>res.data)
}

const AdminLogin = (props) => {
    const elems ={
        orderForm:[{
                    inputtype:"input",
                    elementConfig:{
                        id:"uname",
                        type: "text",
                        placeholder:"Email address or Username",
                    },
                    value:"",
                    valid: true,
                    validationRules:{
                        required:true,
                        minLength:10
                    }
                },
                {
                    inputtype:"input",
                    elementConfig:{
                        id:"pass",
                        type:"password",
                        placeholder: "Password",
                    },
                    value:"",
                    valid: true,
                    validationRules:{
                        required:true,
                        minLength:15
                    }
                },
                {
                    inputtype:"button",
                    elementConfig:{
                        type:"submit",
                        placeholder:"Punch it!",
                    },
                    valid: true,
                    validationRules:{

                    }
                }
        ]
    }

    const [elements,setElements] = useState(elems)
    
    const handleSubmit = async (event)=>{
        console.log("aayo")
        event.preventDefault()
        let uname = document.getElementById("uname").value
        let pswd = document.getElementById("pass").value
        let token = await LogIn({uname,pswd})
        if(token===false)console.log("ERR")
        props.settingToken(token)
    }

    const changeVal = (ev,index)=>{
        let newOrderForm = [...elements.orderForm]
        let rules = newOrderForm[index].validationRules
        if(rules){
            newOrderForm[index].valid = true
            if(rules.required){
                if(ev.target.value===""){
                     newOrderForm[index].valid = false
                     console.log("Emoty")
                }           
            }
        }
        newOrderForm[index].value=ev.target.value
        setElements({orderForm:newOrderForm})
    }

    return(
        <>
            <h1>Please login to view data</h1>
            <div className={AdminLoginStyle.Box}>
                <div className={AdminLoginStyle.title}>DAD'S BURGER ADMIN LOGIN</div>
                <div className={AdminLoginStyle.signin}>Sign In</div>
                <form className={AdminLoginStyle.form} onSubmit={handleSubmit}>
                    {elements.orderForm.map((el,ind)=><FormElement key={el.elementConfig.placeholder} valid={el.valid} inputtype={el.inputtype} elementConfig={el.elementConfig} changes={(event)=>changeVal(event,ind)}/>)}
                </form>
                <span className={AdminLoginStyle.forgot}>Forgot email/username or password?<a href="./">Click here!</a></span>
                <div className={AdminLoginStyle.line}></div>
                <span className={AdminLoginStyle.signup}>Want to register a new admin account?<a href="./">Call us now!</a></span>
            </div>
        </>
    )
}

export default AdminLogin