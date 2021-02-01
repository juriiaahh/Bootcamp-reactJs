import React from 'react'
import '../assets/css/bootstrap.css';
import '../assets/css/Header.css';

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
                    <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#product">Product</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#product">Price</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Logout</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}