import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import {toast} from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Register.css'

const Register = () => {


    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState(null);
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");


    const navigate = useNavigate();
    // form function
    const handleSubmit= async(e)=>{
        e.preventDefault();
       try{
        console.log(name, email, password, phone, address, answer);
      //  if(typeof phone === "string"){
      //   console.log("number is string")
      //   return toast.error("phone number field should be a number")
      //  }
        const res = await axios.post("/api/v1/auth/register",{
            name,email,password,phone,address,answer
        });
      
        if(res.data.success){
            toast.success(res.data.message);
            setTimeout(()=>{
            navigate("/login");
            },2000);
        }else{
          console.log("error");
            toast.error(res.data.message);
        }
       }catch(err){
        // console.log(err);
        // console.log(err.response.data.error.message);
        toast.error(err.response.data.error.message);
       }
    }

    
  return (
    <Layout title={"Register - Ecommerce-app"}>
      <div className="centered-container"  >
        <div className="curved-box" style={{marginBottom:"50px"}}>
        <div className="reghead">

          <h1 className="reg">Register Page</h1>
        </div>

          <form onSubmit={handleSubmit} className="Regform" autoComplete="off">
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="RegName"
            />

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              required
              className="RegMail"
            />

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="RegPass"
              placeholder="Password"
            />

            <input
              type="number"
              id="phone"
              name="phone"
              min={"10"}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="RegTel"
              placeholder="Mobile Number"
            />

            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="RegAdd"
              placeholder="Address"
            />

            <input
              type="text"
              id="answer"
              name="answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="What is your favourite sports?"
              required
              className="RegAns"
            />
            <button type="submit" className="SubmitBtn">
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
