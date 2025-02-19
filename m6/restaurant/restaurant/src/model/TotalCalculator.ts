import Product from "./Product"

export interface ICalculatorModificator{
    add(product : Product) : void
    remove(product : Product) : void
    get total() : number
} 

enum Operation{
    add,
    remove
}


export class TotalCalculator{
    modificator : ICalculatorModificator | null
    constructor(modificator : ICalculatorModificator | null = null){
        this.modificator = modificator
    }
    start(){
        this.addListenres()
    }
    addListenres(){
        let div = document.querySelector('.elements')
        if(div != null){
            div.addEventListener('click', (e) =>{
                let target = (e.target as HTMLElement).children[0]
                if(target != undefined){
                    if(target.classList.contains('fa-minus')){
                        this.ComandModificartion(target, Operation.remove)
                        
                    } else if(target.classList.contains('fa-plus')){                        
                        this.ComandModificartion(target, Operation.add)
                    }
                }
            })
        }
    }

    ComandModificartion(target : Element, operation : Operation ) {
        let input = target.parentElement?.parentElement?.querySelector('input') as HTMLInputElement
        let product: Product = ((input.closest('.card') as any).product as Product)
        let total = document.querySelector('.total .total-price');
        if (input != null && total != null) {
            if(operation == Operation.add){
                input.value = (parseInt(input.value) + 1).toString()
                if (this.modificator != null) {
                    this.modificator.add(product)
                    total.innerHTML = this.modificator.total.toString()
                } else{
                    let price = product.price
                    total.innerHTML = (parseInt(total.innerHTML) + price).toString()
                }
            } else {
                input.value = (parseInt(input.value) - 1).toString()    
                if (this.modificator != null) {
                    this.modificator.remove(product)
                    total.innerHTML = this.modificator.total.toString()
                } else {
                    let price = product.price
                    total.innerHTML = (parseInt(total.innerHTML) - price).toString()
                }
            }
        }
    }
    
}