import React from 'react'
import '../assets/css/bootstrap.css';
import '../assets/css/Header.css';
import {useHistory, Link } from 'react-router-dom';

export default function Header(){
    const history = useHistory();

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <a className="navbar-brand" href="#">Web Design</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => history.push('/Home') }>Home</a>
                </li>
                 <li className="nav-item active">
                    <a className="nav-link" onClick={() => history.push('/product') }>Product</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => history.push('/price') }>Price</a>
                </li>
                <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">Service</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item"  onClick={() => history.push('/service')}>Web Design</a>
                        <li><a class="dropdown-item" onClick={() => history.push('/servicedev')}>Web Development</a></li>
                        </li>
                    </ul>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => history.push('/profile') }>About Us</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" onClick={() => history.push('/') }>Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}