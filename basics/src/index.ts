// custom project type

type Menu = {
   name: string
   price: number
}

const menu = [
    {name: "lorem one", price: 9},
    {name: "lorem two", price: 7},
    {name: "lorem three", price: 10},
    {name: "lorem four", price: 23}
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQue = []


function addNewPizza(pizzaobj: Menu){
   menu.push(pizzaobj)
}


function placePizzaOrder(pizzaname: string) {
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

addNewPizza({name: "lorem five", price: 200})
addNewPizza({name: "lorem six", price: 20})
addNewPizza({name: "lorem seven", price: 100})
addNewPizza({name: "lorem eight", price: 30})


placePizzaOrder("lorem four")
completeOrder(5)

console.log(menu);
console.log(orderQue);
console.log(cashInRegister);