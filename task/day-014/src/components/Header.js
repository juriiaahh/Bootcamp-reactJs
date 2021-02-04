import React from 'react'
import '../assets/css/bootstrap.css';
import '../assets/css/Header.css';
import {useHistory, Link } from 'react-router-dom';

export default function Header(){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <a className="navbar-brand" href="#">Web Design</a>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul className="navbar-nav my-4 my-lg-0">
                <li className="nav-item active">
                    <Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/product">Product</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/price">Price</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Logout</Link>
                </li>
            </ul>
        </div>
    </nav>
    )
}