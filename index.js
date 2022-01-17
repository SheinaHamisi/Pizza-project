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

