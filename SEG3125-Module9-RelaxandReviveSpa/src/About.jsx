import React from 'react';
import Jessica from './images/jessica.jpeg';
import Courtney from './images/courtney.jpeg';
import James from './images/james.jpeg';

function About(props) {
 // let commonLang = props.othrTxt[props.propLang]["common"];
 // const aboutLang = props.othrTxt[props.propLang]["about"];
  let team = props.propsTeam;
  return (
    <div className="about">
      <div class="container">
        <div class="row align-items-center my-5">
         
          <div class="col-lg-5">
            <h1 class="font-weight-light">About</h1>
            <p>
            Relax and Revive Spa believes that the elimination of stress and tension is critical to the improvement 
            and maintenance of overall well being. Relax and Revive Spa works to improve quality of life through 
            physical and mental rejuvenation.  Self esteem and a balance of health and wellness 
            is achieved in the Oasis of calm at Relax and Revive Spa. Treatments, designed to satisfy the 
            whole body, are provided by highly trained staff in the field of massage therapy, esthetics 
            and skincare as well as a full range of body therapies and hair design. Our on-going goal is
             to exceed the expectations of our individual, group, and corporate clientele with hands-on 
             professional service.
            </p>
       
    
    <h2 id="teamArea"><i class="fas fa-user-md"></i>Meet the Team!</h2>
  
    <div class="row justify-content-around" >
        <div class="card">
            <img src={Jessica} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">
                    <h5>Jessica Hewitt</h5>
                    <h6>Hair Stylist and Skincare Specialist</h6>
                    <p class="card-text">Jessica has been a part of the Relax and Revive Spa team for 2 years and takes great pride in providing the best treament for her clients.</p>
                </p>
            </div>
        </div>
        <div class="card">
            <img src={James} class="card-img-top" alt="..." ></img>
            <div class="card-body">
                <p class="card-text">
                    <h5>James Charles</h5>
                    <h6>Makeup Artist</h6>
                    <p class="card-text">James Charles is a renowned makeup artist and has been a part of the team for 5 years and takes great pride in providing the best treatment for his clients.</p>
                </p>
            </div>
        </div>
        <div class="card">
            <img src={Courtney} class="card-img-top" alt="..."/>
            <div class="card-body">
                <p class="card-text">
                    <h5>Courtney Lopez</h5>
                    <h6>Skincare Specialist</h6>
                    <p class="card-text">Courtney Lopez has been a part of the team for 1 year and takes great pride in providing the best treatment for her clients.</p>
                </p>
            </div>
        </div>
    </div>
      </div>
          </div>
        </div>
      </div>
  );
}

export default About;