import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/styles.css';
import code from '../assets/img/code.jpg';

export default function ServiceWebDesign() {
    return(
        <>
        <Header/>
        <div className="container mt-3 p-3">
            <div className="row mb-3">
                <div className="col p-3">
                </div>
            </div>
            <div className="row pl-5">
                <div className="col-lg-4">
                    <h2 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'black'}}>Web Design</h2>
                </div>
                <div className="col-lg-8 p-3">
                    <p style={{fontFamily: 'Montserrat',fontWeight:'bold',color:'black',fontSize:36,letterSpacing:1.5}}>Web design should be three things: human-centered, compelling and future-proof.</p>
                    <p style={{fontFamily: 'Montserrat',color:'black',fontSize:20, textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed vulputate, quam vel congue eleifend, ex enim ultrices dui, eget mattis eros ante ut risus. 
                    Sed lorem metus, pulvinar non porta sit amet, ultrices imperdiet nunc.
                    </p>
                </div>
                <br/>
                <div className="row">
                    <div className="col-md-12">
                        <h2>Related Web Design Projects</h2>
                        <span className="dot mr-1"></span>
                        <span className="dot mr-1"></span>
                        <span className="dot mr-1"></span>
                        <span className="dot mr-1"></span>
                    </div>
                </div>
                <div className="row p-3">
                    <div className="col">
                        <div className="card-product text-center">
                            <div className="card-body">
                                <h5 className="card-title">Project 1</h5>
                                <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                                <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-color" style={{backgroundColor:'#851c50', color:'white'}}>view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col order-1">
                        <div className="card-product text-center">
                            <div className="card-body">
                                <h5 className="card-title">Project 2</h5>
                                <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                                <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-color" style={{backgroundColor:'#851c50', color:'white'}}>view</a>
                            </div>
                        </div>
                    </div>
                    <div className="col order-12">
                        <div className="card-product text-center">
                            <div className="card-body">
                                <h5 className="card-title">Project 3</h5>
                                <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                                <p className="card-text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-color" style={{backgroundColor:'#851c50', color:'white'}}>view</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}