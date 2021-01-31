import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';

export default function Footer() {
    return(
    <footer className="border-top" style={{backgroundColor:'#A55984',color:'white'}}>
        <div className="container">
            <div className="row mb-0 justify-content-center">
                <div className="col-5 mt-1">
                    <p style={{fontSize:16, color:'white'}}>© Copyright - Juriah 2021</p>
                </div>
            </div>
        </div>
    </footer>
    )
}