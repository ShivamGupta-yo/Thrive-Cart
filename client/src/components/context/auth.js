import { useState,useEffect,useContext,createContext } from "react";

import axios from "axios";

export const AuthContext = createContext();



export const AuthProvider = ({children})=>{
const [auth, setAuth] = useState({
  user: null,
  token: "",
});

// axios default
axios.defaults.headers.common['Authorization'] = auth?.token;

useEffect(()=>{
  const data = localStorage.getItem("auth");
  if(data){
    const parseData = JSON.parse(data);
    setAuth({
      user:parseData.user,
      token:parseData.token
    })
    // console.log(data);
  }
},[])
return(
    <AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
)
}

export const useAuth = ()=> useContext(AuthContext);


