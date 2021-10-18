import React, { useEffect, useState } from 'react'
import Nav from '../../components/global/Nav'
import Sidebar from '../../components/global/Sidebar'
import Footer  from '../../components/global/Footer'
import Content from '../../components/index/Content'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Login from '../../components/auth/Login'
import fire from '../../config/firebase'
import { toast} from 'react-toastify';
import Register from '../../components/auth/Register'



const Home = () => {
   const [isLogined,setIsLogined] = useState(false)
   

    const logOutUser = () => {
        const auth = getAuth();
        console.log('auth',auth);
        auth.signOut()
        .then((res) => {
           setIsLogined(false)
            
        })
        .catch((err) => {
            return toast.error(err.message)
        })
    }
    
    return (
        <div>
        
                    <Nav logOutUser={logOutUser}/>
                    <Sidebar />
                    <Content />
                    <Footer />
               
            
            
        </div>
    )
}

export default Home
