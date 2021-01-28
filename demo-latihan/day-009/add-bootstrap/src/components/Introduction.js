import React from 'react';
import classes from '../assets/css/Header.css';
import classesbs from '../assets/css/bootstrap.css';

export default function Introduction() {
    return(
        <div className="container">
            <div className="row mb-3">
                <div className="col p-5">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
            <div className="row pl-5">
                <div className="col-lg-4">
                    <h2 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'black'}}>Profile</h2>
                    <p style={{position:'relative',zIndex:6,fontFamily:'Montserrat',fontWeight:'bold',color:'black',fontSize:45,letterSpacing:6}}>Let's Join Us</p>
                </div>
                {/* <div class="d-none d-lg-block" style={{position:'absolute',zIndex:6,left:430,top:620, width:250,height:250,backgroundColor:'#08236A',borderRadius:200}}></div> */}
                <div className="col-lg-3">
                    <div className="border-top mt-4" style={{marginLeft:60, color:'black'}}></div>
                </div>
                <div className="col-lg-5">
                    <p style={{fontFamily: 'Montserrat',fontWeight:'bold',color:'black',fontSize:36,letterSpacing:1.5}}>We Are Professional Digital Agency that focus on Digital Transformation</p>
                    <p style={{fontFamily: 'Montserrat',color:'black',fontSize:20, textAlign:'justify'}}>Bur tech Media are passionate on Digital Business transformation that focuses on UI / UX Design, Website Development, Android Development, Desktop Development. Alvien Codes Media Was founded in 2020, located in Indonesia.</p>
                    <br/>
                    <div className="d-sm-block d-md-block d-lg-inline">
                        <a href="" className="btn text-white" style={{backgroundColor:'#AF4A83',fontSize:32,fontFamily:'Montserrat',fontWeight:'bold'}}>See More</a>
                    </div>
                </div>

            </div>
        </div>
    )
}