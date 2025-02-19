import Product from "./Product";

export enum Alergens{
    Gluten,
    Marisc,
    Lactosa,
    FruitsSecs,
    Ous,
    Peix,
}

export class Main extends Product {
    alergens : Alergens[]

    constructor(id : number, name: string, price : number, alergens : Alergens[]){
        super(id, name, price)
        this.alergens = alergens
    }

    draw(): HTMLElement {
        let element = super.draw()
        let icons = element.querySelector('.icon-info')
        if(icons != null){
            let html = ''
            for (const alergen of this.alergens) {
                switch(alergen){
                    case Alergens.FruitsSecs:
                        html += '<i class="fa-solid fa-brain" style="background-color: rgb(136, 94, 2);"></i>'
                        break
                    case Alergens.Marisc:
                        html += '<i class="fa-solid fa-shrimp" style="background-color: rgb(245, 0, 0);"></i>'
                        break
                    case Alergens.Peix:
                        html += '<i class="fa-solid fa-fish" style="background-color: rgb(8, 0, 245);"></i>'
                        break
                    case Alergens.Gluten:
                        html += '<i class="fa-solid fa-wheat-awn" style="background-color: rgb(245, 139, 0);"></i>'
                        break
                    case Alergens.Lactosa:
                        html += '<i class="fa-solid fa-cow" style="background-color: rgb(164, 164, 164);"></i>'
                        break
                    case Alergens.Lactosa:
                        html += '<i class="fa-solid fa-egg" style="background-color: rgb(164, 164, 164);"></i>'
                        break
                }
            }
            icons.innerHTML = html
        }
        return element
    }
}
