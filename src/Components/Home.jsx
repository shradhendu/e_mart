import React from 'react'
import Products from './Products'
const Home = () => {
  return (
    <div>
<div className='hero'>
            <div className="card bg-dark text-brown" border-0>
                <img src="/vmart.jpeg" class="card-img" alt="Background" height="600px" />
                <div className="card-img-overlay d-flex flex-column ">
                    <h5 className="card-title display-4 mb-0 fw-bolder ">STYLE YOUR OWN SELF</h5>
                    <p className="card-text fw-bold">WELCOME TO VMART'S LATEST TRENDS</p>
                </div>
            </div>
            <Products/>
        </div>
    </div>
  )
}

export default Home