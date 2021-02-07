import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Profile() {
    return(
        <>
        <Header/>
        <div className="container mt-3 p-5">
            <div className="row mb-3">
                <div className="col p-3">
                </div>
            </div>
            <div className="row pl-5">
                <div className="col-lg-4">
                    <h2 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'black'}}>About us</h2>
                </div>
                <div className="col-lg-8 p-3">
                    <p style={{fontFamily: 'Montserrat',fontWeight:'bold',color:'black',fontSize:36,letterSpacing:1.5}}>We Are Professional Digital Agency that focus on Digital Transformation</p>
                    <p style={{fontFamily: 'Montserrat',color:'black',fontSize:20, textAlign:'justify'}}>Bur tech Media are passionate on Digital Business transformation that focuses on UI / UX Design, Website Development, Android Development, Desktop Development. Alvien Codes Media Was founded in 2020, located in Indonesia.</p>
                    <br/>
                    <div className="d-sm-block d-md-block d-lg-inline">
                        <a href="" className="btn text-white" style={{backgroundColor:'#AF4A83',fontSize:20,fontFamily:'Montserrat',fontWeight:'bold'}}>See More</a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}