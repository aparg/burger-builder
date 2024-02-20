import React, { useState } from "react";
import AdminLogin from "../AdminLogin/AdminLogin";
import DisplayOrder from "../DisplayOrder/DisplayOrder";
import axios from "axios";

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function deleteHandler(id) {
  axios.post("deleteOrder", { id });
}
function AdminPage() {
  console.log("load adminpage");
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  if (token === "$#*LOGGEDIN*$#")
    return <DisplayOrder deleteOrder={(id) => deleteHandler(id)} />;
  return <AdminLogin settingToken={(val) => saveToken(val)} />;
}

export default AdminPage;
