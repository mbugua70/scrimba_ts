var menu = [
    { name: "lorem one", price: 9 },
    { name: "lorem two", price: 7 },
    { name: "lorem three", price: 10 },
    { name: "lorem four", price: 23 }
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQue = [];
function addNewPizza(pizzaobj) {
    menu.push(pizzaobj);
}
function placePizzaOrder(pizzaname) {
    var selectedPizza = menu.find(function (pizzaobj) { return pizzaobj.name === pizzaname; });
    if (!selectedPizza) {
        console.log("".concat(pizzaname, " cannot be found"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQue.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderQue.find(function (order) { return order.id === orderId; });
    return order;
}
addNewPizza({ name: "lorem five", cost: 200 });
addNewPizza({ name: "lorem six", cost: 20 });
addNewPizza({ name: "lorem seven", cost: 100 });
addNewPizza({ name: "lorem eight", cost: 30 });
