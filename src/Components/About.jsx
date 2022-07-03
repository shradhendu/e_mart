import React from 'react'
import { NavLink } from "react-router-dom"
const About = () => {
  return (
    <div>
      <div className="container py-4 my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <hr />
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nam! Deserunt beatae perspiciatis illo illum quisquam asperiores iure aperiam modi odio. Esse dolor mollitia obcaecati facilis doloremque tempora expedita maxime odio, natus eveniet placeat quibusdam explicabo accusamus cum debitis ipsam? Quam deserunt quae ipsum perferendis quos provident unde tenetur in molestias rerum consectetur eius similique, quaerat, corporis tempore magni praesentium distinctio voluptatibus eveniet aut ut, impedit labore error omnis? Iste similique corrupti, illum sit veritatis quidem vero assumenda ipsam deleniti consequatur ex nihil eligendi aut suscipit ut alias ab a pariatur delectus cupiditate voluptas, ea sunt. Labore nihil aspernatur porro!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary  px-3 w-100" >Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center py-5 my-5">
            <img src="/about.jpg" alt="about us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About