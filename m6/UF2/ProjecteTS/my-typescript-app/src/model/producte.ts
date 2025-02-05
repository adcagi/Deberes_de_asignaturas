export default class Product{
    id: number
    name: string
    price: number
    available: boolean = true
    constructor(id:number, name: string, price:number, available: boolean){
        this.id = id,
        this.name = name,
        this.price = price, 
        this.available = true

    }
}