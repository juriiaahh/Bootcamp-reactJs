import React from 'react'
import '../assets/css/styles.css';
import code from '../assets/img/code.jpg';

export default function Content(){
    return(
        <>
        <div class="container p-5">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>Product</h2>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                </div>
            </div>
           
            <div class="row p-3">
                <div class="col">
                    <div class="card-product text-center">
                        <div class="card-body">
                            <h5 class="card-title">Product 1</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
                <div class="col order-1">
                    <div class="card-product text-center">
                        <div class="card-body">
                            <h5 class="card-title">Product 2</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
                <div class="col order-12">
                    <div class="card-product text-center">
                        <div class="card-body">
                            <h5 class="card-title">Product 3</h5>
                            <img width="50%" heigh="50%" src={code} alt="Card image cap"/>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-color">view</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}