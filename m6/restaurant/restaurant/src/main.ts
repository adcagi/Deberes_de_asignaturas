import Drink from "./model/Drink";
import {Main, Alergens} from "./model/Main";
import Product from "./model/Product";
import {TotalCalculator} from "./model/TotalCalculator";



//filtre categories
let categories = document.querySelector('.categories')
if(categories != null){
  categories.addEventListener('click', (e) => {
    let target = e.target as HTMLElement
    let productesFiltrats = products
    if(target.tagName == 'LI'){
      switch(target.id){
        case 'drinks':
          productesFiltrats = products.filter((p) => p instanceof Drink)
          break
        case 'main':
          productesFiltrats = products.filter((p) => p instanceof Main)
          break
      }
      clearSelectedFilterBtn()
      target.className = 'selected'
    }
    drawProducts(productesFiltrats)
  })
}

function clearSelectedFilterBtn(){
  let element = document.querySelector('.categories li.selected')
  if(element != null){
    element.className = ''
  }  
}

// Scroll lateral per al menú
let item = document.querySelector('.categories ul')
if(item !== null){
  item.addEventListener("wheel", function (e : Event) {
    if(e instanceof WheelEvent){
        e.preventDefault()
        if (e.deltaY > 0) item.scrollLeft += 30;
        else item.scrollLeft -= 30;
    }
  });
}


//Dibuixat dels productes
let products :Product[]= [
  
  new Drink(1,'Mojito', 6.5, true, true),
  new Drink(2,'Cervesa',2.8,false, true),
  new Drink(3,'Coca-Cola Zero',2.8,false, false),
  new Drink(4,'Coca-Cola', 3.1, true, false),
  new Main(102,'Ensalada de formatge', 18.25, [Alergens.FruitsSecs, Alergens.Lactosa, Alergens.Ous, Alergens.Peix]),
  new Main(201,'Spaguetis amb marisc', 18.25, [Alergens.Marisc, Alergens.FruitsSecs, Alergens.Gluten,Alergens.Lactosa, Alergens.Ous, Alergens.Peix])

] 

function drawProducts(products : Product[]) {
  let elements = document.querySelector('.elements')
  if (elements instanceof HTMLElement) {
    elements.innerHTML = ''
    for (let product of products) {
      elements.appendChild(product.draw());
    }
  }
}

drawProducts(products);
let totalCalculator = new TotalCalculator()
totalCalculator.start()
