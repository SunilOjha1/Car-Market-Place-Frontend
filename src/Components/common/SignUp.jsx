import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import "../../assets/login.css";

export const SignUp = () => {
  const {register , handleSubmit} = useForm();
  const navigate= useNavigate();
  const submitHandler = async(data)=>{

    try{
      data.roleId = "67c11ef0451bc1685ec4748b"
      const res = await axios.post("/user", data)
      if(res.status===201){
        // user added
        alert("user added successfully")
        navigate("/login")
      }else{
        // user not added
        alert("User not created")
      }

    } catch(error){
      alert("Signup Failed")
    }
    
  }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>USER SIGNUP...</h1>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>FirstName</label>
//           <input type="text" {...register("firstName")}></input>
//         </div>
//         <div>
//           <label>email</label>
//           <input type="text" {...register("email")}></input>
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" {...register("password")}></input>
//         </div>
//         <div>
//           <input type="submit"></input>
//         </div>
//       </form>
//     </div>

//   )
// }
return (
  <div className="login">
    <div className="login-card">
      <div className="brand">
        <div className="brand-logo"></div>
        <h1>CREATE ACCOUNT</h1>
        <p>Sign up to get started</p>
      </div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" {...register("firstName")} placeholder="Enter first name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" {...register("lastName")} placeholder="Enter last name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} placeholder="Enter password" />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" {...register("age")} placeholder="Enter age" />
        </div>
        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
      <div className="signup-link">
        <p>Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  </div>
);
};