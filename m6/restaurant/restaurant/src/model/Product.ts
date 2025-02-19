export default abstract class Product {
    id : number
    name : string
    price : number
    available : boolean = true

    constructor(id : number, name : string, price : number){
        this.id = id
        this.name = name
        this.price = price
        this.available = true
    }

    draw() : HTMLElement{
      let element = document.createElement('DIV')
        element.className = 'card'
        element.innerHTML = `<img src="/images/${this.id}.jpg">
          <div class="info">
            <div>${this.name}</div>
            <div class="icon-info">
                
            </div>
            <div class="price-info">
              ${this.price}€
            </div>
          </div>
          <div class="selector-container">
            <div class="selector">
              <button><i class="fa-solid fa-minus"></i></button>
                <input value="0">
              <button><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>`;
          (element as any).product = this
        return element
    }

    
}