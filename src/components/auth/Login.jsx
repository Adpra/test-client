import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';

const Login = ({loginUser}) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


   const onChangeEmail = (e) => {
      const value = e.target.value
      console.log(value);
      setEmail(value)
   }

   const onChangePassword = (e) => {
    const value = e.target.value
    console.log(value);
    setPassword(value)
   }

   

   const handleSubmit = (e) => {
       e.preventDefault();
       

       if(!email||!password){
           return toast.error('Data Tidak Boleh Kosong')
       }

      if(!loginUser){
        return toast.error('Anda Sudah Login')
      }
        
        const data = {
            email :email, 
            password: password,
        }
        
        loginUser(data)
   }



    return (
        <div style={{marginTop: "200px"}}>
            <ToastContainer />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card p-4">
                            <div className="card-body">
                            <h1 className="text-center pb-5" style={{color: "#333399"}}>Halaman Login</h1>
                                <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                                </div>
                                
                                <button className="btn btn-primary"  type="submit" > Login </button>
                                <div className="my-4">
                                <Link to="/Register" className="text-white   pr-2">
                                    <div className="text-center btn btn-outline-danger ">Register</div>
                                 </Link>
                                 <Link to="/" className="text-white ">
                                    <div className="text-center btn btn-outline-dark ">Home</div>
                                 </Link>
                                </div>
                               
                                </form>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
