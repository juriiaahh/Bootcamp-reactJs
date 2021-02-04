import React from 'react'
import '../assets/css/styles.css';
import Header from './Header';
import Footer from './Footer';

export default function Price(){
    return(
        <>
        <Header />
        <div className="container p-4">
            <div className="row p-4">
                <div className="col-md-6">
                    <h2 className="p-1">Product Prices</h2>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                </div>
            </div>
           
            <div className="row p-3">
                <div className="col p-3">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Product 1</div>
                        <div className="card-body">
                            <h2 className="card-text p-3">Rp. 100.000</h2>
                            <a href="#" className="btn btn-color"  style={{backgroundColor:'#851c50', color:'white'}}>Order</a>
                        </div>
                    </div>
                </div>
                <div className="col p-3 order-1">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Product 2</div>
                        <div className="card-body">
                            <h2 className="card-text p-3">Rp. 200.000</h2>
                            <a href="#" className="btn btn-color"  style={{backgroundColor:'#851c50', color:'white'}}>Order</a>
                        </div>
                    </div>
                </div>
                <div className="col p-3 order-12">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold', backgroundColor:'#F28FC0'}}>Product 3</div>
                        <div className="card-body">
                            <h2 className="card-text p-3">Rp. 300.000</h2>
                            <a href="#" className="btn btn-color"  style={{backgroundColor:'#851c50', color:'white'}}>Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}