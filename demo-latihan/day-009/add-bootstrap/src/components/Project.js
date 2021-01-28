import React from 'react'
import img1 from '../assets/img/background/code.jpg';
import img2 from '../assets/img/background/computer.jpg';
import img3 from '../assets/img/background/code.jpg';

export default function Project(){
    return(
        <div className="container">
        <div className="row mb-3">
            <div className="col p-3">
                <h3 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'black'}}>Project</h3>
                <p style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:20,color:'black'}}>129,769,066 projects created</p>
            </div>
        </div>
            <div className="row justify-content-md-center">
                <div className="card col-md-auto col-md-3 mr-5 p-3" style={{width: 100}}>
                    <img src={img1} className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">Project Ideas for Home Learning</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="btn btn-primary"  style={{backgroundColor:'#AF4A83',fontSize:20,fontFamily:'Montserrat',fontWeight:'bold'}}>View Project</a>
                    </div>
                </div>
                <div className="card col-md-auto col-md-3 mr-5 p-3" style={{width: 100}}>
                    <img src={img2} className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">Project Ideas for Home Learning</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="btn btn-primary"  style={{backgroundColor:'#AF4A83',fontSize:20,fontFamily:'Montserrat',fontWeight:'bold'}}>View Project</a>
                    </div>
                </div>
                <div className="card col-md-auto col-md-3 mr-5 p-3" style={{width: 100}}>
                    <img src={img3} className="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 className="card-title">Project Ideas for Home Learning</h5>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="btn btn-primary"  style={{backgroundColor:'#AF4A83',fontSize:20,fontFamily:'Montserrat',fontWeight:'bold'}}>View Project</a>
                    </div>
                </div>
            </div>
        </div>
    )
}