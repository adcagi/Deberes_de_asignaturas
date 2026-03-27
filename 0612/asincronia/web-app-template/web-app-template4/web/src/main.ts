import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Producte {
  product_id: number,
  product_name: string,
  supplier_id: number,
  category_id: number
}

async function getProducts(){
  
    const response = await fetch('/api/producte');
    const data = (await response.json()) as Producte[];
    const app = document.getElementById('app') as HTMLDivElement;

    let aux = `<table>
    <tr>
    <th>ID</th>
    <th>NOM</th>
    <th>PROVEIDOR</th>
    <th>CATEGORIA</th>
    <th>EDITAR</th>
    <th>BORRAR</th>
    </tr> `
    

    for(let producte of data){

      aux += `
        <tr>
        <td>${producte.product_id}</td>
        <td>${producte.product_name}</td>
        <td>${producte.supplier_id}</td>
        <td>${producte.category_id}</td>
      <th><button class="editar btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal2">EDITAR</button></th>
      <th><button class="borrar btn btn-danger">BORRAR</button></th>
        </tr>`
    }
    
    aux += `</table>`
    app.innerHTML = aux;






  
}


async function createProduct(){
  const form = document.getElementById('crear') as HTMLFormElement;


  form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const inputName = document.getElementById('nombre') as HTMLInputElement;
    const inputSupplier = document.getElementById('proveedor') as HTMLInputElement;
    const inputCategory = document.getElementById('categoria') as HTMLInputElement;

    try{
        const response = await fetch('/api/producte', {
          
        })
    }catch(error){
      console.error(error)
    }


  })
}




document.addEventListener('DOMContentLoaded', () => {
  getProducts();
  // createProduct();
  // deleteProduct();
  // editProduct();
})