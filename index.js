class Contact {
  constructor(first, last, phone, email, address) {
    this.firstName = first;
    this.lastName = last;
    this.phoneNumber = phone;
    this.emailAddress = email;
    this.address = address;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Pizza {
  constructor(size, quantity, crust, orderType) {
    this.size = size;
    this.quantity = quantity;
    this.crust = crust;
    this.orderType = orderType;
  }

  total(price) {
    return price * this.quantity;
  }
}

var img = "./IMAGES/barbecuechicken.png";

var pizzas = [
  { name: "Barbecue chicken", id: "barbeque", img: img, price: 700 },
  { name: "Hawaiian", id: "hawaiian", img: img, price: 750 },
  { name: "Veggie pizza", id: "veggie", img: img, price: 650 },
  { name: "Meat deluxe", id: "deluxe", img: img, price: 800 },
  { name: "Periperi chicken", id: "periperi", img: img, price: 700 },
  { name: "Pepporoni", id: "pepporoni", img: img, price: 750 },
];

var pizzaPrice;
var pizzaName;

// Loops over each pizza and adds image to modal
pizzas.forEach(function (pizza) {
  $("#" + pizza.id + "-btn").click(function () {
    $("#pizza-img").prepend("<img src=" + pizza.img + " id=" + pizza.id + ">");

    $("#pizza-name").prepend("<h2 id=pepporoni-title>" + pizza.name + "</h2>");

    $("#initial-price-pre-text").append(
      '<h2 id="initial-price-text"> Ksh. ' + pizza.price + "</h2>"
    );

    pizzaPrice = pizza.price;
    pizzaName = pizza.name;
  });
  $("#exampleModal").on("hidden.bs.modal", function () {
    $("#" + pizza.id).remove();

    $("#" + pizza.id + "-title").remove();

    $("#initial-price-text").remove();
  });
});

$("#calculate").click(function(){
    $(".title").show();
});

$("form").submit(function(event){
    event.preventDefault();

    var size = $("input:radio[name=size]:checked").val();
    var crust = $("#select-crust").val();
    var quantity = $("#quantity").val();
    var orderType = $("#order-type").val();
    var firstName = $("#first-name").val();
    var lastName = $("#last-name").val();
    var emailAddress = $("#email-address").val();
    var phoneNumber = $("#phone").val();
    var county = $("#county").val();
    var address = $("#address").val();

    var newName = new Contact(firstName, lastName, phoneNumber, emailAddress, address);

    var newPizza = new Pizza(size, quantity, crust, orderType);

    var deliveryFee = 250;

    // var newAddress = new Address(county, address);

    // newName.address.push(newAddress);

    // alert(newPizza.orderType);

    // ### LARGE ###
    // dine
    if (newPizza.size === "large" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300));
    }else if (newPizza.size === "large" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100));
    }else if (newPizza.size === "large" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200));
    }

    // delivery
    if (newPizza.size === "large" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + deliveryFee));
    }else if (newPizza.size === "large" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 100 + deliveryFee));
    }else if (newPizza.size === "large" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 300 + 200 + deliveryFee));
    }


    // ### MEDIUM ###
    // dine
    if (newPizza.size === "medium" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150));
    }else if (newPizza.size === "medium" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 100));
    }else if (newPizza.size === "medium" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 150));
    }

    // delivery
    if (newPizza.size === "medium" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + deliveryFee));
    }else if (newPizza.size === "medium" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 100 + deliveryFee));
    }else if (newPizza.size === "medium" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 150 + 150 + deliveryFee));
    }
    // ### SMALL ###
    // dine
    else if (newPizza.size === "small" && newPizza.crust === "cryspy" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice));
    }else if (newPizza.size === "small" && newPizza.crust === "stuffed" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 50));
    }else if (newPizza.size === "small" && newPizza.crust === "gluten-free" && newPizza.orderType === "dine"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 100));
    }

    // delivery
    else if (newPizza.size === "small" && newPizza.crust === "cryspy" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + deliveryFee));
    }else if (newPizza.size === "small" && newPizza.crust === "stuffed" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 50 + deliveryFee));
    }else if (newPizza.size === "small" && newPizza.crust === "gluten-free" && newPizza.orderType === "delivery"){
        $("#total-output").text("Total: " + newPizza.total(pizzaPrice + 100 + deliveryFee));
    }

    

    $("#checkout").click(function(){
        $("#submission").css("display", "block");
    });

    if (orderType === "dine"){
        deliveryFee = 0; 
    }else if (orderType === "delivery"){
        deliveryFee = 250
    }

    $("#order-summary").text("Order Summary");
    $("#name-summary").text(newName.fullName());
    $("#email-summary").text(newName.emailAddress);
    $("#phone-summary").text(newName.phoneNumber);
    $("#address-summary").text(newName.address);
    $("#pizza-name-summary").text(pizzaName + ", " + newPizza.crust);
    $("#quantity-summary").text(newPizza.quantity + ", " + newPizza.size + ",  Delivery Charges: " + deliveryFee);
});
