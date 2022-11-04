import React, { createContext, useState  } from "react";
// import { axios } from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState()

    const handleLogin = (body) => {
         console.log(body)
       fetch(`https://reqres.in/api/login`, {
         method: "POST",
         body: JSON.stringify(body),
         headers: {
           "Content-Type": "application/json",
         },
       })
         .then((res) => res.json())
         .then((res) => {
             setToken(res.token);
             console.log(res.token);
           if (res.token) {
             alert("Successfuly logged in");
            //  navigate("/");
             // navigate("/booking")
           }
         })
         .catch((err) => {
           console.log(err);
         });
    }
    const value = {
      handleLogin,
      token,
      setToken,
    };
    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>;
};
