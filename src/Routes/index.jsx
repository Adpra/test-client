import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import AddData from '../pages/addData'
import Edit from '../pages/Edit'
import Home from '../pages/Home/Index'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { toast} from 'react-toastify';

const Routes = () => {
    const [isLogined,setIsLogined] = useState(false)
   const [user, setUser] = useState('')
    useEffect(() => {
        const auth = getAuth();
       onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLogined(true);
           return setUser(user);
            // ...
        } else {
            // User is signed out
            setIsLogined(false)
        }
        });
},[isLogined,user])


const loginUser = ({email, password}) => {
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        
        // Signed in 
        console.log('success', res);
        
       
            setUser(res.user);
            setIsLogined(true);
        


        
       
    })
    .catch((error) => {
        if(error.code === "auth/wrong-password"){
            return toast.error('Login Email atau Password Salah')
        }else if(error.code === "auth/user-not-found"){
            return toast.error('Login Email Tidak di Temukan')
        }else 
        {
            return toast.error('Login Harus Email ')
        }
    });

}

    return (
        <div>
            {
                isLogined ? 
                (<div>
                    <Router>
                <Switch>
                <Route path="/Login" >
                        <Login />
                    </Route>
                    <Route path="/Register" >
                        <Register />
                    </Route>
                <Route path="/AddData" >
                        <AddData/>
                    </Route>
                <Route path="/Edit/:id" >
                        <Edit />
                    </Route>
                    <Route>
                        <Home path="/" />
                    </Route>
                </Switch>
            </Router>
                </div>) 
                : 
                (<div>
                    <Router>
                        <Switch>
                        <Route path="/Register" >
                            <Register />
                        </Route>
                        <Route  >
                            <Login path="/Login" loginUser={loginUser}/>
                        </Route>
                        </Switch>
                    </Router>
                </div>)
            }
            
        </div>
    )
}

export default Routes