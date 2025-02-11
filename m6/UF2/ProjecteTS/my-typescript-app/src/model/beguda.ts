import Product from "./producte";

 export default class beguda extends Product{
    acohol: boolean
    sugar: boolean

    constructor(id:number, name: string, price:number, acohol: boolean, sugar: boolean){
       super(id, name, price)
       this.sugar = sugar,
       this.acohol = acohol
    }


}

let b = new beguda(105, "Mojito", 7.50, true, true)
b.name = "Mojito"
b.price = 7.50
b.acohol= true
b.sugar = true