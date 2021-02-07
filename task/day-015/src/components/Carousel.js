import React from 'react'
import img from '../assets/img/img.PNG';
import Header from './Header';
import Footer from './Footer';

export default function Carousel(){
    return(
        <>
        <Header />
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col-sm-6 mt-3 p-2">
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
                            <div className="col-sm-6 mt-3">
                                <img width="100%" heigh="100%" className="card-home-img-top" src={img} alt="First slide" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-6 mt-3 p-2">
                                <div className="card-home-body mr-3 ml-5 p-5">
                                    <h1 className="card-home-title text-center">Web Development</h1>
                                    <div className="col-md-4 offset-md-4">
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
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col-sm-6 mt-3 p-2">
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
                            <div className="col-sm-6 mt-3">
                                <img width="100%" heigh="100%" className="card-home-img-top" src={img} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <Footer />
        </>
    )
}