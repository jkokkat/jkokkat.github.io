// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

var currentTab = 0; // Current tab is set to be the client information tab
displayTab(currentTab); // Display the current tab

function displayTab(number) {
  // This function will display the specific tab the user would like
  var specificTab = document.getElementsByClassName("tab");
  specificTab[number].style.display = "block";
 
  if (number == 0) {
    document.getElementById("backButton").style.display = "none";
  } else {
    document.getElementById("backButton").style.display = "inline";
  }
  if (number == (specificTab.length - 1)) {
	document.getElementById("nextButton").innerHTML = "Place Order";
  } else {
    document.getElementById("nextButton").innerHTML = "Next";
  }
}

function decideTab(number) {
	// This function will figure out which tab to display
	var specifiedTab = document.getElementsByClassName("tab");
	
	if (number == 1 && !checkInputs()) return false;
	
	specifiedTab[currentTab].style.display = "none";
	
	currentTab = currentTab + number;
	// if you have reached the order details tab, have alert and bring back to first page
	if (currentTab >= specifiedTab.length) {
	   alert("ORDER CONFIRMED: Your will be notified shortly with details on the delivery status of your groceries.");
	  document.getElementById("userForm").submit();
	  return false;
	}
	// Otherwise, display the correct tab:
	displayTab(currentTab);
  }

  function checkInputs() {
	// This function deals with checking what user entered in the form
	var displayedTab, inputInfo, i, valid = true;
	displayedTab = document.getElementsByClassName("tab");
	inputInfo = displayedTab[currentTab].getElementsByTagName("input");
	for (i = 0; i < inputInfo.length; i++) {
	  // If a field is empty, add an "invalid" class to the field
	  if (inputInfo[i].value == "") {
		inputInfo[i].className += " invalid";
		valid = false;
	  }
	}
	return valid; // return the valid status
  }

  // generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4, slct5) {
    var s1 = document.getElementById(slct1);
	var s2 = document.getElementById(slct2);
	var s3 = document.getElementById(slct3);
	var s4 = document.getElementById(slct4);
	var s5 = document.getElementById(slct5);
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(s1.checked, products, s3.checked, s4.checked, s5.checked);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
        checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
        var label1 = document.createElement('label');
        var label2 = document.createElement('label');
        label1.htmlFor = productName;
        label2.htmlFor = productPrice;
        label1.appendChild(document.createTextNode(productName));
		label2.appendChild(document.createTextNode(productPrice));
        s2.appendChild(label1);
        s2.appendChild(document.createTextNode(" Price: $"));
        s2.appendChild(label2);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));      
	}
}
	
// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){
	
	var ele = document.getElementsByName("product");
	var chosenProducts = [];
	
	var c = document.getElementById('displayCart');
	c.innerHTML = "";
	
	// build list of selected items
	var para = document.createElement("P");
	para.innerHTML = "You selected : ";
	para.appendChild(document.createElement("br"));
	for (i = 0; i < ele.length; i++) { 
		if (ele[i].checked) {
			para.appendChild(document.createTextNode(ele[i].value));
			para.appendChild(document.createElement("br"));
			chosenProducts.push(ele[i].value);
		}
	}
		
	// add paragraph and total price
	c.appendChild(para);
	c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));
		
}

