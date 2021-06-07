	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk",
		organic: true,
		nut: true,
		lactose: false,
		price: 7.34,
		pic: "./images/milk.png"
	},
	{
		name: "Pistachios",
		organic: true,
		nut: false,
		lactose: true,
		price: 8.35,
		pic: "./images/pistachios.png"
	},
	{
		name: "Chicken Nuggets",
		organic: false,
		nut: true,
		lactose: true,
		price: 9.99,
		pic: "./images/chickennuggets.png"
	},
	{
		name: "Peanut Butter",
		organic: false,
		nut: false,
		lactose: true,
		price: 5.27,
		pic: "./images/peanutbutter.png"
	},
	{
		name: "Frozen Cheese Pizza",
		organic: false,
		nut: true,
		lactose: false,
		price: 5.87,
        pic: "./images/cheesepizza.png"
	},
	{
		name: "Trail Mix",
		organic: true,
		nut: false,
		lactose: true,
		price: 4.97,
		pic: "./images/trailmix.png"
	},
    {
		name: "Apple",
		organic: true,
		nut: true,
		lactose: true,
		price: 1.19,
		pic: "./images/apple.jpg"
	},
	{
		name: "Tomatoes",
		organic: true,
		nut: true,
		lactose: true,
		price: 3.47,
		pic: "./images/tomato.png"
	},
	{
		name: "Yogurt",
		organic: false,
		nut: true,
		lactose: false,
		price: 4.77,
		pic: "./images/yogurt.png"
	},
	{
		name: "Cream Cheese",
		organic: false,
		nut: true,
		lactose: false,
		price: 4.97,
		pic: "./images/creamcheese.png"
	},
	{
        name: "Mr. Noodles",
        lactose: true,
        nut: true,
        organic: false,
        price: 1.99,
		pic: "./images/mrnoodles.png"
    },
	
].sort((a,b) => a.price-b.price);
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(restrictionOne, prods, restrictionTwo, valid) {

    let product_names = [];

    var default_choice = false;

    if ((restrictionOne == false) && (restrictionTwo == false)) {
        default_choice = true;
    }

	for (let i = 0; i < prods.length; i++) {
        if (default_choice) {
            if (valid) {
                if (prods[i].organic) {
                    product_names.push(prods[i]);
                }
            } else {
                product_names.push(prods[i]);
            }
        } else if ((restrictionOne) && (prods[i].lactose) && (restrictionTwo) && (prods[i].nut)) {
            if (valid) {
                if (prods[i].organic) {
                    product_names.push(prods[i]);
                }
            } else {
                product_names.push(prods[i]);
            }
        } else if ((restrictionOne) && (prods[i].lactose) && (restrictionTwo == false) && (prods[i].nut == false) ||
            (restrictionOne== true) && (prods[i].lactose) && (restrictionTwo == false) && (prods[i].nut)) {
            if (valid) {
                if (prods[i].organic) {
                    product_names.push(prods[i]);
                }
            }
            else {
                product_names.push(prods[i]);
            }
        } else if ((restrictionTwo) && (prods[i].nut) && (restrictionOne == false) && (prods[i].lactose == false) ||
            (restrictionTwo) && (prods[i].nut) && (restrictionOne == false) && (prods[i].lactose)) {
            if (valid) {
                if (prods[i].organic) {
                    product_names.push(prods[i]);
                }
            }
            else {
                product_names.push(prods[i]);
            }
        } else if ((restrictionTwo == false) && (restrictionOne== false)) {
            if (check) {
                if (prods[i].organic) {
                    product_names.push(prods[i]);
                } else {
                    product_names.push(prods[i]);
                }
            }
            else {
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
	price =(Math.round((totalPrice * 1000)/10)/100).toFixed(2);
	return price;
}
