const menu = [
    {name: "lorem one", price: 9},
    {name: "lorem two", price: 7},
    {name: "lorem three", price: 10},
    {name: "lorem four", price: 23}
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQue = []


function addNewPizza(pizzaobj){
   menu.push(pizzaobj)
}


function placePizzaOrder(pizzaname) {
   const selectedPizza  = menu.find(pizzaobj => pizzaobj.name === pizzaname)

   if(!selectedPizza){
    console.log(`${pizzaname} cannot be found`)
    return;
   }
   cashInRegister += selectedPizza.price;
   const newOrder = {id: nextOrderId++,pizza: selectedPizza, status: "ordered" }
   orderQue.push(newOrder)
   return newOrder
}

function completeOrder(orderId: number) {
 const order = orderQue.find((order) => order.id === orderId)
 return order;
}

addNewPizza({name: "lorem five", cost: 200})
addNewPizza({name: "lorem six", cost: 20})
addNewPizza({name: "lorem seven", cost: 100})
addNewPizza({name: "lorem eight", cost: 30})


placePizzaOrder("lorem four")
completeOrder("1")

console.log(menu),
console.log(orderQue),
console.log(cashInRegister)