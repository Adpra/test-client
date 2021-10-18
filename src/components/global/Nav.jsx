import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Nav = ({logOutUser}) => {

    
  const handleSubmit = () => {
    logOutUser()
  }

  return (
    <div>
      
                {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
              {/* Left navbar links */}
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                  <a href="/" className="nav-link">Home</a>
                </li>
              </ul>
              {/* Right navbar links */}
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                    <i className="fas fa-expand-arrows-alt" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-primary"  href="/Login" role="button">
                    Login
                  </a>
                </li>
                <form onSubmit={handleSubmit}>
                <li className="nav-item px-2">
                  <button className="btn btn-outline-danger"  href="/" type="submit">
                    LogOut
                  </button>

                </li>
                </form>
              </ul>
            </nav>
            {/* /.navbar */}


    </div>
  )
}

export default Nav

