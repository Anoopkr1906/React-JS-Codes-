import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    //TODO: make it more easy to understand

    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }


    //it means authentication is required but authStatus is false (that is user is not logged in. Therefore, navigate to login page and prevent them from accessing whatever the children componenent is!!)
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } 
    
    //it means authentication is not required but authStatus is true (that is user is logged in. Therefore, navigate to home page and prevent them from accessing whatever the children componenent is!!) Since authentication is not required to acess the children componenent (like Login or Signup) but user is already authenticated
    else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>;
}