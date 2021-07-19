import React from "react";
import { useState } from "react";
import ServicesCheck from './servicesCheck';
import { Map, GoogleApiWrapper } from 'google-maps-react';

function Contact() {
  const [email, setEmail] = useState("");
  const emailValidate = (email) =>{
    const email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let valid_email = email_regex.test(email);
    console.log("email");
    if(!valid_email){
        alert("Please enter a valid email address.");
        return false;
    }
    return true;

}
const validateAllInputs = () =>{
  let emailCheck = emailValidate(email);
  //alert("Thank you for your submission! You will be notified via your email for further information. ")
  
  if(emailCheck){
      alert("Thank you for your submission! You will be notified via your email for further information. ")
      return true;
  } 
  return false;
} 
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <h1 class="font-weight-light">Contact</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
           
            <div class="map-container">
            <div id="map-container-google-1" class="z-depth-1-half map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.499119723068!2d-75.6809612846513!3d45.41943907910039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05531e5f4f1d%3A0x17ab96403142de79!2s800%20King%20Edward%20Ave%2C%20Ottawa%2C%20ON%20K1N%206N5!5e0!3m2!1sen!2sca!4v1623593037520!5m2!1sen!2sca" width="600" height="450" allowfullscreen="true" loading="lazy"></iframe>
            </div>
           

            <div class="bg-img">
  
      <form action="javascript: void(0);" >
        <h4>Book an Appointment</h4>
        <div class="form-group">
          <input type="name" class="form-control" id="name" oninvalid="this.setCustomValidity('Name cannot be empty.')" 
          onchange="this.setCustomValidity('')"placeholder="Enter Full Name" required />
        </div>
       
        <div class="form-group">
           
            <p>Phone Number <input type="text" class="form-control" id="phone" title="This is required to provide you with further information." placeholder="(xxx)xxx-xxxx" oninvalid="this.setCustomValidity('Phone number cannot be empty.')" 
                onchange="this.setCustomValidity('')"required /></p>
        </div>
        <div class="form-group">
        <label className="form-label" htmlFor="Email">{email}</label>
        <input type="email" className="form-control" id="Email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)}></input>
        </div>
        <div class="form-group">
             
            <select class="custom-select" id="service" required>
                <option selected disabled value="">Select Service</option>
                <option>Hair Care</option>
                <option>Makeup Artistry</option>
                <option>Facial Care</option>
              </select>
        </div>
        <div class="form-group">
            <select class="custom-select" id="specialistSelect"  required onchange="setSpecialist()">
                <option selected disabled value ="">Select Specialist</option>
                <option>Jessica Hewitt</option>
                <option>James Charles</option>
                <option>Courtney Lopez</option>
              </select>
        </div>
     
        <div class="form-row">
            <div class="form-group col-md-10">
            <label for="date">Preferred Date of Appointment:</label>
            <input class="form-control" type="text" id="dateInput" placeholder="mm/dd/yyyy" disabled required />
            </div>
            <div class="form-group col-md-10">
            <label for="inputAddress2">Time</label>
            <input type="time" class="form-control" id="inputTime" required />
            </div>
        </div>
        <div class="form-group">
        <button className="btn-lg  mt-3 " onClick={validateAllInputs}>Submit</button>            
        </div>
      </form>
</div>


        </div>
        <span class="map-txt">
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
          <br>
          </br>
                <h1>Come visit us!</h1>
                <h5><i class="fa-solid fa-location"></i>Location</h5>
                <p>800 King Edward Ave, Ottawa, ON K1N 6N5</p>
                <h5>Clinic Hours</h5>
                <p>Monday-Friday Open 24 Hours Saturday Closed and Sunday Closed </p>
                <h5>Contact Us</h5>
                <p>info@relaxandrevivespa.ca</p>     
                <p>(613)-783-1113</p>    
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
