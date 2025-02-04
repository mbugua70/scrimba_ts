// custom project type

type Menu = {
   id: number
   name: string
   price: number
}

type Order = {
   id: number
   pizza: string
   status: "ordered" | "completed"
}

type OrderQue = {
   id: number,
   pizza: object,
   status:  "ordered" | "completed"
}

type Identifier = string | number

const menu: Menu[] = [
    {id: 1, name: "lorem one", price: 9},
    {id: 2, name: "lorem two", price: 7},
    {id: 3, name: "lorem three", price: 10},
    {id: 4, name: "lorem four", price: 23}
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQue: OrderQue[] = []


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
   const newOrder: OrderQue = {id: nextOrderId++,pizza: selectedPizza, status: "completed" }
   orderQue.push(newOrder)
   return newOrder
}

function completeOrder(orderId: number) {
 const order = orderQue.find((order) => order.id === orderId)
 if(!order){
   return;
 }
 order.status = "completed"
 return order;
}

function getPizzaDetails(identifier: Identifier){
   if(typeof identifier === "string"){
      const result = menu.find(order => order.name.toLocaleLowerCase() === identifier.toLocaleLowerCase())
      return result;
   }
   const result = menu.find(order => order.id === identifier)
   return result;
}

addNewPizza({id: 1,name: "lorem five", price: 200})
addNewPizza({id: 2,name: "lorem six", price: 20})
addNewPizza({id: 3,name: "lorem seven", price: 100})
addNewPizza({id: 4,name: "lorem eight", price: 30})


placePizzaOrder("lorem four")
completeOrder(5)

console.log(menu);
console.log(orderQue);
console.log(cashInRegister);