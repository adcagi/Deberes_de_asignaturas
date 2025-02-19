import Product from "./Product";

export default class Drink extends Product {
    alcohol : boolean
    sugar: boolean

    constructor(id : number, name: string, price : number, sugar : boolean, alcohol : boolean){
        super(id, name, price)
        this.sugar = sugar
        this.alcohol = alcohol
    }
    draw(): HTMLElement {
        let element = super.draw()
        let icons = element.querySelector('.icon-info')
        if(icons != null){
            icons.innerHTML = (this.alcohol ? '<i class="fa-solid fa-wine-bottle"></i>' : '') +
            (this.sugar ? '<i class="fa-solid fa-candy-cane"></i>' : '')
        }        
        return element
    }
}
