// custom types

type Address = {
    city: string
    house: string
    town: string
}



type Person = {
    name: string
    age: number
    isChecked: boolean
    address: Address
}

let personOne: Person = {
    name: "john",
    age: 22,
    isChecked: true,
    address: {
        city: "wamunyoro",
        house: "test",
        town: "test"
    }
}


let personTwo: Person = {
    name: "mbugua",
    age: 26,
    isChecked: false,
    address: {
        city: "karen",
        house: "xhld12",
        town: "test two"
    }
}


// using question mark to put the variable optional to type safety
// type Person = {
//     name: string
//     age: number
//     isChecked: boolean
//     address?: Address
// }