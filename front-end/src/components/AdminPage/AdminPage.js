import React, {useState} from "react";
import AdminLogin from "../AdminLogin/AdminLogin";
import DisplayOrder from "../DisplayOrder/DisplayOrder";

function getToken(){
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    return userToken?.token
}

function AdminPage(){
    console.log("load adminpage")
    const [token,setToken] = useState(getToken())

    const saveToken = (userToken) => {
        sessionStorage.setItem('token',JSON.stringify(userToken))
        setToken(userToken)
    }

    if(token==="$#*LOGGEDIN*$#") return <DisplayOrder/>
    return <AdminLogin settingToken={(val) => saveToken(val)}/>
}

export default AdminPage