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
	   alert("Order Request Complete: You will be notified shortly with details on the delivery status of your groceries.");
	  document.getElementById("userForm").submit();
	  return false;
	}
	// Otherwise, display the correct tab
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
	return valid; // return whether it is valid
  }

  // generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, slct3, slct4) {

	  var s1 = document.getElementsByName(slct1);
	  var s2 = document.getElementById(slct2);
	  var s3 = document.getElementsByName(slct3);
	  var s4 = document.getElementsByName(slct4);
	
	var dietaryPreferences = [s1, s3, s4];
  
  
	for (i = 0; i < 3; i++) {
	  dietaryPreferences[i] = false;
	}
  
	s1.forEach(radio => {
	  if(radio.checked) {
		if (radio.value == "LactoseTolerant") {
		  dietaryPreferences[0] = false;
		} else if (radio.value == "LactoseIntolerant") {
			dietaryPreferences[0] = true;
		}
	  }
	});
  
	s3.forEach(radio => {
	  if(radio.checked) {
		if (radio.value == "NoNutAllergy") {
		  dietaryPreferences[1] = false;
		} else if (radio.value == "NutAllergy") {
			dietaryPreferences[1] = true;
		}
	  }
	});
  
	s4.forEach(radio => {
	  if(radio.checked) {
		if (radio.value == "NotOrganic") {
		  dietaryPreferences[2] = false;
		} else if (radio.value == "Organic") {
			dietaryPreferences[2] = true;
		}
	  }
	});
  
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

		
	// obtain a reduced list of products based on restrictions
	var optionArray = restrictListProducts(dietaryPreferences[0], products, dietaryPreferences[1], dietaryPreferences[2]);
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i].name;
		var productPrice = optionArray[i].price;
		var price ="       Price: $";
        var photo = optionArray[i].pic;

		//Create the card with the photo
		var itemContainer = document.createElement("div");
		itemContainer.className += "groceryBox";
		var image = document.createElement("img");
		image.src = photo;
		itemContainer.appendChild(image);
        s2.append(itemContainer);

		// create the checkbox and add in HTML DOM
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
        checkbox.value = productName;
		s2.appendChild(checkbox);
		
		// create a label for the checkbox, and also add in HTML DOM
        var label1 = document.createElement('label');
        var label2 = document.createElement('label');
		var labelPrice =document.createElement('label');
        label1.htmlFor = productName;
        label2.htmlFor = productPrice;
		labelPrice.htmlFor = price;
		label1.setAttribute("style","font-size:25px");
		label2.setAttribute("style","font-size:25px");
		labelPrice.setAttribute("style","font-size:25px");
        label1.appendChild(document.createTextNode(productName));
		label2.appendChild(document.createTextNode(productPrice));
		labelPrice.appendChild(document.createTextNode(price));
        s2.appendChild(label1);
        s2.appendChild(labelPrice);
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

