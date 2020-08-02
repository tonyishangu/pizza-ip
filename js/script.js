$(document).ready(function () {
    // form submission function
    $("#get-pizza-order").submit(function (event) {
        // a constructor to define data needed in ordering pizzas
        function UserOrder(size, crust, toppings, quantity) {
            this.size = size;
            this.crust = crust;
            this.toppings = toppings;
            this.quantity = quantity;
        }

        // getting user data - price
        var pizzaSizePrice = function getSize() {
            var pizzaSize = document.getElementById("pizza-size").value;
            return parseInt(pizzaSize);
        };

        var pizzaCrustPrice = function getCrustType() {
            var pizzaCrust = document.getElementById("crust-type").value;
            return parseInt(pizzaCrust);
        };

        var pizzaToppingsPrice = function getToppings() {
            var pizzaToppings = document.getElementById("pizza-toppings").value;
            return parseInt(pizzaToppings);
        };

        var pizzaQuantityPrice = function getQuantity() {
            var pizzaQuantity = document.getElementById("pizza-quantity").value;
            return parseInt(pizzaQuantity);
        };

        //initializing a new order
        var inputForUserOrder = new UserOrder(
            pizzaSizePrice,
            pizzaCrustPrice,
            pizzaToppingsPrice,
            pizzaQuantityPrice
        );

        //a variable to get the total price of the user's order
        var totalPrice =
            (inputForUserOrder.size() +
                inputForUserOrder.crust() +
                inputForUserOrder.toppings()) *
            inputForUserOrder.quantity();

        //control user input
        if (totalPrice > 0) {
            //total user order price
            alert("Your total order is = ksh" + totalPrice);

            //prompt for delivery
            var delivery = confirm(
                "For an additional ksh100, we can deliver your order to your location. Would you want that?"
            );

            //delivery control flow
            if (delivery === true) {
                //infinite loop to control correct location entry
                for (; ;) {
                    var location = prompt(
                        "Please enter the location where you want your order delivered: "
                    );

                    //checking validity of user input
                    if (location !== "") {
                        alert(
                            "Your order will be delivered here: " +
                            location +
                            ". Thank you for choosing us! Order again soon"
                        );

                        break;
                    } else {
                        alert(
                            "Please enter a valid location to have your order delivered!"
                        );
                    }
                }

                //final prompt
                alert(
                    "In case you missed it... Your total order is = ksh" +
                    totalPrice +
                    " + ksh100 delivery fee."
                );
            } else {
                alert(
                    "Thank you for choosing us! Your order has been processed, pass by our restaurant to pick it."
                );

                //final prompt
                alert(
                    "In case you missed it... Your total order is = ksh" + totalPrice
                );
            }

            //reset form
            $("#get-pizza-order").reset();
        } else {
            alert("Please fill in all the form inputs to make an order!");
        }

        event.preventDefault();
    });
});