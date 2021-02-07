import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/styles.css';
import code from '../assets/img/code.jpg';

export default function webDevelopment() {
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
                    <h2 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'black'}}>Development</h2>
                </div>
                <div className="col-lg-8 p-3">
                    <p style={{fontFamily: 'Montserrat',fontWeight:'bold',color:'black',fontSize:36,letterSpacing:1.5}}>our website isn’t just a URL.</p>
                    <p style={{fontFamily: 'Montserrat',color:'black',fontSize:20, textAlign:'justify'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Sed vulputate, quam vel congue eleifend, ex enim ultrices dui, eget mattis eros ante ut risus. 
                    Sed lorem metus, pulvinar non porta sit amet, ultrices imperdiet nunc.
                    </p>
                </div>
                <br/>
                </div>

            <div className="row p-4">
                <div className="col-md-6">
                    <h2>Related Development Projects</h2>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                </div>
            </div>
           
            <div className="row p-3">
                <div className="col p-3">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Project 1</div>
                        <div className="card-body p-3">
                            <h4 className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </h4>
                            <a href="#" className="btn btn-color" style={{backgroundColor:'#851c50', color:'white'}}>view</a>
                        </div>
                    </div>
                </div>
                <div className="col p-3 order-1">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Project 2</div>
                        <div className="card-body p-3">
                            <h4 className="card-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            </h4>
                            <a href="#" className="btn btn-color"  style={{backgroundColor:'#851c50', color:'white'}}>View</a>
                        </div>
                    </div>
                </div>
                <div className="col p-3 order-12">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Project 3</div>
                        <div className="card-body p-3">
                        <h4 className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        </h4>                           
                        <a href="#" className="btn btn-color"  style={{backgroundColor:'#851c50', color:'white'}}>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}