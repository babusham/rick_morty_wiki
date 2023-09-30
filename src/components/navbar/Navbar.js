import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import '../../App.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link to='/' className='ubuntu fs-3 navbar-brand fw-bold'> Rick & Morty <span className="text-primary">Wiki</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <style jsx>
                            {`
        button[aria-expanded="false"]>.close{
            display:none;
        }
      
        button[aria-expanded="true"]>.open{
            display:none;
        }
        `}
                        </style>
                        <i className="fw-bold open text-dark"><AiOutlineMenu /></i>
                        <i className="fw-bold close text-dark"><AiOutlineClose /></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-center" id="navbarNav">
                        <div className="navbar-nav fs-5 text-decoration-none">
                            <NavLink to="/" className="nav-link">
                                Character
                            </NavLink>
                            <NavLink to="/episode" className="nav-link">
                                Episode
                            </NavLink>
                            <NavLink to="/location" className="nav-link">
                                Location
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar