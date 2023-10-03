import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary navbra-bg">
  <div className="container">
    <Link  href="/" className="navbar-brand"  >Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link to="/" className="nav-link active " aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link" >Services</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" >About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" >Contact</Link>
        </li>
       
       
      </ul>
      <form class="d-flex" role="search">
      <button class="btn  btn-style" type="submit">Sing up</button>
        <button class="btn btn-style-border btn-style" type="submit">Log in </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
