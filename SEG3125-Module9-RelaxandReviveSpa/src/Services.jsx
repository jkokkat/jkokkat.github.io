import React from 'react';
import Skincare from './images/facialslide.jpeg';
import Hair from './images/hairslide.jpeg';
import Makeup from './images/makeupslide.jpeg';
function Services() {
      return (
        <div className="services">
          <div class="container">
            <div class="row align-items-center my-5">
             
              <div class="col-lg-5">
                <h1 class="font-weight-light">Services</h1>
                <p>
                  Relax and Revive Spa has been providing their services in Ottawa for 20 years 
                  ranging from hair care, skin care, nail design, and makeup artistry. 
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-around" >
        <div class="card">
            <img src={Hair} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">
                    <h5>Hair Care $80</h5>
                    <p class="card-text">This flat fee is for washing, cutting and styling for a simplistic look and additional services will be charged accordingly.</p>
                </p>
            </div>
        </div>
        <div class="card">
            <img src={Makeup} class="card-img-top" alt="..." ></img>
            <div class="card-body">
                <p class="card-text">
                    <h5>Makeup $50</h5>
                    <p class="card-text">Makeup is done by James Charles and will have a flat fee of $50 for a simplistic look and building on it having the price increased. </p>
                </p>
            </div>
        </div>
        <div class="card">
            <img src={Skincare} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">
                    <h5>Makeup $80</h5>
                    <p class="card-text">Makeup is done by Courtney Lopez and will have a flat fee of $80 for a simplistic look and building on it having the price increased..</p>
                </p>
            </div>
        </div>
    </div>
        </div>
      );
    }
    
    export default Services;