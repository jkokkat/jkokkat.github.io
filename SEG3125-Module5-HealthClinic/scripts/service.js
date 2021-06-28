// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
    var availability={
        'Dr. John Mazarra':[1,3,5],
        'Dr. Jenna Keegan':[2,3],
        'Dr. Jesse Peters':[3,4,5],
    }
    
    var selectedDoctor = '';


    function setDoctor(){
        $("#dateInput").removeAttr("disabled");
    }
    function validate() {
        let credit_card_num = $("#credit").val();
        let phone_number = $("#phone").val();
        let date = $("#dateInput").val();
        let time = $("#inputTime").val();
    
      
        let datetimecheck = dateTimeEmpty(date, time);
        
        if(validatePhone(phone_number) && validateCredit(credit_card_num) && datetimecheck && checkSelected()){
           // alert("Successfully booked");
            let message = `Your appointment has been received for ${date} at ${time}.\n
            Thank you for choosing Companion Care Clinic.` 
            $.alert(message,"Success!");
            }
    }
// Function to verify that the phone number is correct.
// Here, I validate for (12345), but you have to change that for a phone validation
// Tutorials on Regular expressions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// https://flaviocopes.com/javascript-regular-expressions/
// Regular expressions can get complex, you can think in terms of a series of characters
// or numbers
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    //var filter = /^(\([-+]?[0-9]+)\)$/;
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  // var filter ="/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/";
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
function validateCredit(txtCredit) {
    let a = document.getElementById(txtCredit).value;
    console.log(a,'credit here')
    let filter = /\d{4}\s\d{4}\s\d{4}\s\d{4}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/28/2021","07/06/2021","07/09/2021"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() == 0 || date.getDay() == 6)
        return [false];
    var doctor = document.getElementById("doctorSelect");
    if (doctor.value === "Dr. John Mazarra") {
        if (date.getDay() === 2 || date.getDay() === 4)
            return [false];
    } else if (doctor.value === "Dr. Jenna Keegan") {
        if (date.getDay() === 1 || date.getDay() === 4 || date.getDay() === 5) 
            return [false];
    } else if (doctor.value === "Dr. Jesse Peters") {
        if (date.getDay() === 1 || date.getDay() === 2)
            return [false];
    } 

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) == -1 ]
}



function checkSelected() {
    var serviceElement = document.getElementById('service');
    var selectedService = serviceElement.options[serviceElement.selectedIndex].value;
    if(!selectedService) {  
        alert("You must select a service.");
        return false;
    }
    var doctorElement = document.getElementById('doctorSelect');
    var selectedDoctor = doctorElement.options[doctorElement.selectedIndex].value;
    if(!selectedDoctor) {  
        alert("You must select a doctor.");  
        return false;
    }
    return true;
} 
function dateTimeEmpty(date, time){
    let check = true;

    if(!date){
        alert("Please select a date.");
        check = false;
    } if (!time) {
        alert("Please select a time.");
        check = false;
    }
    return check;
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function(){


    $("#submitBtn").click(function(){
      validate();
    }) 

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Wrong format for phone number");
            // $("#phone").val("(xxxx)");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });



    $("#credit").on("change", function(){
        if (!validateCredit("credit")){
            alert("Wrong format for credit");
            $("#credit").addClass("is-invalid");
        }
        else {
            $("#credit").removeClass("is-invalid");
        }
    });
    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $ ( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1st, 2021
            minDate: new Date('06/01/2021'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    ); 


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#credit").on("mouseenter", function(){
        $("#credit").addClass("showInput");
    });

    $("#credit").on("mouseleave", function(){
        $("#credit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#credit,#phone,#emailInput").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    }); 


});