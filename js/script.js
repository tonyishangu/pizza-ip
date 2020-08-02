$("#pizza-order").submit(function(event){
    function UserOrder(size, crust, toppings, quantity){
        this.size = size,
        this.crust = crust,
        this.toppings = toppings,
        this.quantity = quantity
    }
    // getting user data price

    var sizePrice = function getSize (){
        var size = document.getElementById("size").value;
        return parseInt(size);
    };
    var crustPrice = function getCrust (){
        var crust = document.getElementById("crust").value;
        return parseInt(crust);
    };
    var toppingsPrice = function getToppings (){
        var toppings = document.getElementById("toppings").value;
        return parseInt(toppings);
    };
    var quantityPrice = function getQuantity (){
        var quantity = document.getElementById("quantity").value;
        return parseInt(quantity);
    };

    // new order

    var inputForUserOrder = new UserOrder (
        sizePrice,
        crustPrice,
        toppingsPrice,
        quantityPrice
    );

    // variable to get total price

    var totalPrice =
    (inputForUserOrder.size()+
     inputForUserOrder.crust()+
     inputForUserOrder.toppings())*
    inputForUserOrder.quantity();

    // control user input

    if(totalPrice > 0) {
        alert("your total order is Ksh " +totalPrice)
    };
    event.preventDefault();
});