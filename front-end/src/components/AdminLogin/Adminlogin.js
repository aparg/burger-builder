import React, {useState, useEffect} from "react";

const AdminLogin = (props) => {
    const [LoggedInState,SetLoggedInState] = useState(0)

    useEffect(()=>{
        
    })

    const getAuthorizedCredentials = () =>{
        return axios.get('/logincredentials').then(
            (res) =>  {
                AuthUname = res.data.uname
                AuthPswd = res.data.pswd
                return {AuthUname,AuthPswd}
            }
        )
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        const {uname, pswd} = document.forms[0]
        getAuthorizedCredentials().then((res)=>{
            if(res.AuthUname==uname && res.AuthPswd) console.log("Authenticated")
        }
        )
    }
    return(
        <>
            <h1>Please login to view data</h1>
            <form method="POST" action={handleSubmit} className="formSubmit">
                <label for="uname">Username</label>
                <input type="text" name="uname"></input>
                <label for="pass">Password</label>
                <input type="password" name="pass"></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}