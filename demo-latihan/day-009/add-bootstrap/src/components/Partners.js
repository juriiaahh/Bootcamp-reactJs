import React from 'react';
import amazon from '../assets/img/partners/amazon.jpg';
import association from '../assets/img/partners/association.png';
import atlassian from '../assets/img/partners/atlassian.png';
import cisco from '../assets/img/partners/cisco.png';
import google from '../assets/img/partners/google.png';
import microsoft from '../assets/img/partners/microsoft.jpg';

export default function Partners() {
    return(
        <section className="p-5">
        <div className="container">
            <div className="row mb-3 mt-3">
                <div className="col p-5">
                    <h3 style={{fontFamily:'Montserrat',fontWeight:'bold', textAlign:'center', fontSize:42,color:'black'}}>Partners</h3>
                    <p style={{fontFamily:'Montserrat', textAlign:'center', fontSize:20,color:'black'}}>
                        Major Partners and Corporate Supporters
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img src={amazon} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <img src={association} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <img src={atlassian} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <img src={cisco} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <img src={google} className="card-img-top" alt="..."/>
                </div>
                <div className="col">
                    <img src={microsoft} className="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
    </section>

    )
}