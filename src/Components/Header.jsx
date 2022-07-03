import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './Buttons/CartBtn';
import Login from './Buttons/Login';
import Signup from './Buttons/Signup';
const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container py-2">

          <a className="navbar-brand mx-auto fw-bolder display-4" href="/">V_MART</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <NavLink className="home fw-bolder ms-4" aria-current="page" to="/home">Home</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="product fw-bolder ms-4" aria-current="page" to="/products">Products</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="about fw-bolder ms-4" aria-current="page" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="contact fw-bolder ms-4" aria-current="page" to="/contact">Contact</NavLink>
              </li>
            </ul>

          </div>
          <Login />
          <Signup />
          <CartBtn />
        </div>
      </nav>
    </>
  )
}

export default Header