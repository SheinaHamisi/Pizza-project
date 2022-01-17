class Pizza{
    constructor(name){
        this.name = name;
    }
}

class Order extends Pizza{
    constructor(name, size, quantity,crust,orderType ){
        super(name);
        this.size = size;
        this.quantity = quantity;
        this.crust = crust;
        this.orderType = orderType;
    }
}

$('#barbeque').click(function(){
    
})