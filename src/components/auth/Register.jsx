import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';


const Register = () => {

    // const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


//    const onChangeUsername = (e) => {
//       const value = e.target.value
//       console.log(value);
//       setUser(value)
//    }
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
    if(password.length <6){
        return toast.error('Password Minimal 6 Karakter')
    }
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      // Signed in 
      console.log('success', res);
      setEmail('')
      setPassword('')
      return toast.success('Registrasi Berhasil')
    })
    .catch((error) => {
      if(error.code ==="auth/email-already-in-use"){
          return toast.warning('Email Sudah ada')
      }
  
    });
}

    return (
        <div style={{marginTop: "200px"}}>
            <ToastContainer />
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <div className="card-body">
                            <h1 className="text-center pb-5" style={{color: "#333399"}}>Halaman Register</h1>
                            <form onSubmit={handleSubmit} >
                            {/* <div className="form-group">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="Username" className="form-control" value={user} onChange={onChangeUsername}/>
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                            </div>
                            <div>
                                <button className="btn btn-primary"  type="submit">Register</button>
                                <div className="my-4">
                                <Link to="/Login" className="text-white   pr-2">
                                    <div className="text-center btn btn-outline-danger ">Login</div>
                                 </Link>
                                 <Link to="/" className="text-white ">
                                    <div className="text-center btn btn-outline-dark ">Home</div>
                                 </Link>
                                </div>
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

export default Register
