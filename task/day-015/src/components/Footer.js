import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';

export default function Footer() {
    return(
    <footer className="border-top" style={{backgroundColor:'#A55984',color:'white'}}>
        <div className="container mt-1">
            <div className="row justify-content-center">
                <div className="col-md-12 mt-1">
                    <p style={{fontSize:16, color:'white'}}>© Copyright - Juriah 2021</p>
                </div>
            </div>
        </div>
    </footer>
    )
}