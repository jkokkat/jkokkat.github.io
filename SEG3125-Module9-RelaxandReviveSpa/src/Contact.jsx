import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
function Contact() {
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
  
    <form action="" class="form-container">
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
            <p>Email<input type="email" class="form-control" id="emailInput" title="This is required to provide you with further information." placeholder="sample@email.com" required /></p>
        </div>
        <div class="form-group">
             
            <select class="custom-select" id="service" required>
                <option selected disabled value="">Select Service</option>
                <option>Nutritional Counselling</option>
                <option>Grooming Services</option>
                <option>Dental Care</option>
                <option>Exams and Diagnostics</option>
                <option>Preventative Medicine</option>
              </select>
        </div>
        <div class="form-group">
            <select class="custom-select" id="doctorSelect"  required onchange="setDoctor()">
                <option selected disabled value ="">Select Doctor</option>
                <option>Dr. John Mazarra</option>
                <option>Dr. Jenna Keegan</option>
                <option>Dr. Jesse Peters</option>
              </select>
        </div>
     
        <div class="form-row">
            <div class="form-group col-md-10">
            <label for="date">Preferred Date of Appointment:</label>
            <input class="form-control" type="text" id="dateInput" placeholder="mm/dd/yyyy" disabled required />
            <p><strong>PLEASE NOTE:</strong> We are closed June 28, July 6, and July 9 due to building maintenance.</p>
            </div>
            <div class="form-group col-md-10">
            <label for="inputAddress2">Time</label>
            <input type="time" class="form-control" id="inputTime" required />
            </div>
        </div>
        <div class="form-group">
            <p><i class="fas fa-credit-card"></i> Credit Card Number</p><input type="credit" class="form-control" id="credit" title="This is only required in case of last minute cancellation." placeholder="XXXX XXXX XXXX XXXX" required />
        </div>
        <div class="form-group">
            <button type="submit" id="submitBtn" class="btn">BOOK APPOINTMENT </button>
        </div>
      </form>
</div>







        </div>
        <span class="map-txt">
                <h1>Come visit us!</h1>
                <h5><i class="fa-solid fa-location"></i>Location</h5>
                <p>800 King Edward Ave, Ottawa, ON K1N 6N5</p>
                <h5>Clinic Hours</h5>
                <p>Monday-Friday Open 24 Hours Saturday Closed and Sunday Closed </p>
                <h5>Contact Us</h5>
                <p>info@companioncareclinic.ca</p>     
                <p>(613)-783-1113</p>    
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
