import React from 'react'
import img from '../assets/img/img.PNG';

export default function Carousel(){
    return(
        <>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-sm-6 mt-3 p-2">
                                <div className="card-home-body mr-3 ml-5 p-5">
                                    <h1 className="card-home-title text-center">Web Design</h1>
                                    <div class="col-md-4 offset-md-4">
                                        <hr className="hr my-4"/>
                                    </div>
                                    <p className="card-home-text text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed vulputate, quam vel congue eleifend, ex enim ultrices dui, eget mattis eros ante ut risus. 
                                    Sed lorem metus, pulvinar non porta sit amet, ultrices imperdiet nunc.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-3">
                                <img width="100%" heigh="100%" className="card-home-img-top" src={img} alt="First slide" />
                            </div>
                        </div>
                    </div>
                    
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-sm-6 mt-3 p-2">
                                <div className="card-home-body mr-3 ml-5 p-5">
                                    <h1 className="card-home-title text-center">Web Design</h1>
                                    <div class="col-md-4 offset-md-4">
                                        <hr className="hr my-4"/>
                                    </div>
                                    <p className="card-home-text text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed vulputate, quam vel congue eleifend, ex enim ultrices dui, eget mattis eros ante ut risus. 
                                    Sed lorem metus, pulvinar non porta sit amet, ultrices imperdiet nunc.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-3">
                                <img width="100%" heigh="100%" className="card-home-img-top" src={img} alt="Second slide" />
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-sm-6 mt-3 p-2">
                                <div className="card-home-body mr-3 ml-5 p-5">
                                    <h1 className="card-home-title text-center">Web Design</h1>
                                    <div class="col-md-4 offset-md-4">
                                        <hr className="hr my-4"/>
                                    </div>
                                    <p className="card-home-text text-left">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Sed vulputate, quam vel congue eleifend, ex enim ultrices dui, eget mattis eros ante ut risus. 
                                    Sed lorem metus, pulvinar non porta sit amet, ultrices imperdiet nunc.
                                    </p>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-3">
                                <img width="100%" heigh="100%" className="card-home-img-top" src={img} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}