// import React from "react";
// import axios from "axios";

// function LogIn(credentials){
//     return axios.post('/logincredentials',credentials).then(res=>res.data)
// }

// const AdminLogin = (props) => {

//     const handleSubmit = async (event)=>{
//         event.preventDefault()
//         let uname = document.getElementById("uname").value
//         let pswd = document.getElementById("pass").value
//         let token = await LogIn({uname,pswd})
//         console.log(token)
//         props.settingToken(token)
//     }

//     return(
//         <>
//             <h1>Please login to view data</h1>
//             <form onSubmit={handleSubmit} className="formSubmit">
//                 <label htmlFor="uname">Username</label>
//                 <input type="text" name="uname" id="uname"></input>
//                 <label htmlFor="pass">Password</label>
//                 <input type="password" name="pass" id="pass"></input>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }

// export default AdminLogin