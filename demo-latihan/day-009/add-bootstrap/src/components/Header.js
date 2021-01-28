import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';
import img1 from '../assets/img/background/im.jpg';


export default function Headers() {
    return(
    
    <div className="layer">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a class="navbar-brand" href="#">
                        <h3 style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Bur Tech</h3>
                    </a>
                    <div className="collapse navbar-collapse text-right offset-6" id="navbarNav">
                    <ul className="navbar-nav text-uppercase mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Product</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Teams</a>
                        </li>
                    </ul>
                    </div>
                </div>
             </nav>
    <div className="card-body">
       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
            </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" style={{height:590}} src={img1} alt="First slide"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}