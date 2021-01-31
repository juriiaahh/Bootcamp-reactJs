import React from 'react'
import '../assets/css/styles.css';

export default function Price(){
    return(
        <>
        <div class="container p-5">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                    <h2>Product Prices</h2>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                    <span class="dot mr-1"></span>
                </div>
            </div>
           
            <div class="row p-3">
                <div class="col">
                    <div class="card mb-3">
                        <div class="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 1</div>
                        <div class="card-body">
                            <h2 class="card-text">Rp. 100.000</h2>
                            <a href="#" class="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
                <div class="col order-1">
                    <div class="card mb-3">
                        <div class="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 2</div>
                        <div class="card-body">
                            <h2 class="card-text">Rp. 200.000</h2>
                            <a href="#" class="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
                <div class="col order-12">
                    <div class="card mb-3">
                        <div class="card-header card-color-price" style={{color:'black', fontWeight:'bold'}}>Product 3</div>
                        <div class="card-body">
                            <h2 class="card-text">Rp. 300.000</h2>
                            <a href="#" class="btn btn-color">Order</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}