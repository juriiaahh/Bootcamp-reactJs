import React from 'react'
import '../assets/css/styles.css';
import code from '../assets/img/code.jpg';

export default function Content(){
    return(
        <>
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2>Product</h2>
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
                            <h5 className="card-title">Product 1</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
                <div className="col order-1">
                    <div className="card-product text-center">
                        <div className="card-body">
                            <h5 className="card-title">Product 2</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
                <div className="col order-12">
                    <div className="card-product text-center">
                        <div className="card-body">
                            <h5 className="card-title">Product 3</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}