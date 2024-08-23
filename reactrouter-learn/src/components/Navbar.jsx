import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (  
          <header className="mb-auto">
            <nav className="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
                  <div className="container">
                    <a className="navbar-brand d-md-none" href="#"> 
                      Aperture
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
                      <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div className="offcanvas-body">
                        <ul className="navbar-nav flex-grow-1 justify-content-between"> 
                          <li className="nav-item"> <Link className="nav-link" to="/">Home</Link></li>
                          <li className="nav-item"><Link className="nav-link" to="/products">Products</Link> </li>
                          <li className="nav-item"><Link className="nav-link" to="/posts">Posts</Link> </li>
                          <li className="nav-item"><Link className="nav-link" to="/admin" >Admin</Link> </li> 
                        </ul>
                      </div>
                    </div>
                  </div>
                </nav> 
          </header>  
          
        
    );
  }
  
  export default Navbar;