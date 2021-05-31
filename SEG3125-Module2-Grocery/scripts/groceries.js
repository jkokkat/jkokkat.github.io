	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "milk",
		organic: true,
		nut: true,
		lactose: false,
		price: 7.34
	},
	{
		name: "pistachios",
		organic: true,
		nut: false,
		lactose: true,
		price: 8.35
	},
	{
		name: "chicken nuggets",
		organic: false,
		nut: true,
		lactose: true,
		price: 9.99
	},
	{
		name: "peanut butter",
		organic: false,
		nut: false,
		lactose: true,
		price: 5.27
	},
	{
		name: "frozen cheese pizza",
		organic: false,
		nut: true,
		lactose: false,
		price: 5.87
	},
	{
		name: "trail mix",
		organic: true,
		nut: false,
		lactose: true,
		price: 4.97
	},
    {
		name: "apple",
		organic: true,
		nut: true,
		lactose: true,
		price: 1.19
	},
	{
		name: "tomatoes",
		organic: true,
		nut: true,
		lactose: true,
		price: 3.47
	},
	{
		name: "yogurt",
		organic: false,
		nut: true,
		lactose: false,
		price: 4.77
	},
	{
		name: "cream cheese",
		organic: false,
		nut: true,
		lactose: false,
		price: 4.97
	},
].sort((a,b) => a.price-b.price);
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(lactose, prods, nuts, organic, none) {

    let product_names = [];

    

	for (let i=0; i<prods.length; i+=1) {
        // lactose and nut restrictions
        if ((lactose == true) && (prods[i].lactose == true) && (nuts == true) && (prods[i].nut == true)) {
            // organic restriction
            if (organic == true) {
                if (prods[i].organic == true) {
                    product_names.push(prods[i]);
                }
            }
            // no organic restriction
            else {
                product_names.push(prods[i]);
            }
        }
        // lactose restriction only
        else if ((lactose == true) && (prods[i].lactose == true) && (nuts==false)) {
            // organic restriction
            if (organic == true) {
                if (prods[i].organic == true) {
                    product_names.push(prods[i]);
                }
            }
            // no organic restriction
            else {
                product_names.push(prods[i]);
            }
        }
        // nut allergy only
        else if ((nuts == true) && (prods[i].nut == true) && (lactose==false)) {
            // organic restriction
            if (organic == true) {
                if (prods[i].organic == true) {
                    product_names.push(prods[i]);
                }
            }
            // no organic restriction
            else {
                product_names.push(prods[i]);
            }
        }
        // checking if user prefers organic only
        else if ((lactose == false) && (nuts == false)) {
            if (organic == true) {
                if (prods[i].organic == true) {
                    product_names.push(prods[i]);
                }
            }
            else {
                product_names.push(prods[i]);
            }
        }
        // if no restrictions
        else if (none == true && lactose ==false && nuts ==false) {
            // if it is organic that is preferred
            if (organic == true) {
                // and product is organic
				if(prods[i].organic == true){
					product_names.push(prods[i]);
				}
            }
            // if it is not organic
			else{
				product_names.push(prods[i]);
			}
		}
    }
	return product_names;
    
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
