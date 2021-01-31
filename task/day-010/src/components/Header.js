import React from 'react'
import '../assets/css/bootstrap.css';
import '../assets/css/Header.css';

export default function Header(){
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <a class="navbar-brand" href="#">Web Design</a>
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            </ul>
            <ul class="navbar-nav my-4 my-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#product">Product</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#product">Price</a>
                </li>
            </ul>
        </div>
    </nav>
    )
}