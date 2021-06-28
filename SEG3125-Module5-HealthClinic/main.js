/* 
function validate() {
	
    let credit_card_num = $("#credit").val();
    let phone_number = $("#Phone").val();
    let email_address = $("#Email").val();
    let last_name = $("#FirstName").val();
    let first_name = $("#LastName").val();
    let address = $("#Address").val();
    let app_dt = $("#datepicker").val();
    let app_time = $("#timepicker").val();


    let cccheck = creditCardFormat(credit_card_num);
    let phonecheck = phoneNumberFormat(phone_number);
    let emailcheck = emailFormat(email_address);
    let namecheck = nameFormat(first_name,last_name);
    let addresscheck = addressEmptyFormat(address);
    let datetimecheck = dateTimeEmpty(app_dt, app_time);
    let expertcheck = expertServiceSelection(specialist,services_selected);
    
	if(validatePhone("phone") && validateCredit("credit")){
		alert("Successfully booked");
        let message = `Your appointment has been received for ${app_dt} at ${app_time}.\n
        You have registered for: ${services_selected.toString()} with ${specialist}.\n
        Thank you for choosing Companion Care Clinic.` 
        $.alert(message,"Success!");
        }
	} */



    
   



