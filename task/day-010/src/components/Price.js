import React from 'react'
import '../assets/css/styles.css';

export default function Price(){
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Product Prices</h2>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                    <span className="dot mr-1"></span>
                </div>
            </div>
           
            <div className="row p-3">
                <div className="col">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 1</div>
                        <div className="card-body">
                            <h2 className="card-text">Rp. 100.000</h2>
                            <a href="#" className="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
                <div className="col order-1">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 2</div>
                        <div className="card-body">
                            <h2 className="card-text">Rp. 200.000</h2>
                            <a href="#" className="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
                <div className="col order-12">
                    <div className="card mb-3">
                        <div className="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 3</div>
                        <div className="card-body">
                            <h2 className="card-text">Rp. 300.000</h2>
                            <a href="#" className="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}