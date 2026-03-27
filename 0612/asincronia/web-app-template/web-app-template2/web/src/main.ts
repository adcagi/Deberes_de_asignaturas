import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Producte {
  product_id: number,
  product_name: string,
  supplier_id: number,
  category_id: number
}

async function getProducts() {
  const response = await fetch('/api/producte');
  const data = (await response.json()) as Producte[];

  const app = document.getElementById('app') as HTMLDivElement;

  let aux = `<table>
  <tr>
  <th>ID</th>
  <th>NOM</th>
  <th>PROVEIDOR</th>
  <th>CATEGORIA</th>
  <th>Borrar</th>
  <th>Editar</th>
  </tr>`

  for (let producte of data) {
    aux += `<tr>
  <td>${producte.product_id}</td>
  <td>${producte.product_name}</td>
  <td>${producte.supplier_id}</td>
  <td>${producte.category_id}</td>
  <td><button class="editar  btn_warning" data-bs-toggle="modal" data-bs-target="#modal2" > Editar </button></td>
  <td><button class="borrar btn-danger" > Borrar </button></td>

  
  </tr>`
  }


  aux += `</table>`

  app.innerHTML = aux

}


async function createproducts() {
  const form = document.getElementById('crear') as HTMLFormElement;


  form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const name = (document.getElementById('nombre') as HTMLInputElement).value
    const supplier = parseInt((document.getElementById('proveedor') as HTMLInputElement).value)
    const category = parseInt((document.getElementById('categoria') as HTMLInputElement).value)

    try {
      const response = await fetch(`/api/producte/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            product_name: name,
            supplier_id: supplier,
            category_id: category
          }

        )
      })

      if (response.ok) {
        form.reset();
        getProducts();
      } else {
        alert('error al crear producto')
      }

    } catch (error) {
      console.error(error)
      alert(`ha habido un errorr: ${error}`)
    }
  })

}


async function deleteProduct() {
  const app = document.getElementById('app') as HTMLDivElement;

  app.addEventListener('click', async (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains('borrar')) {
      const row = target.closest('tr')
      if (!row) return;

      const productId = Number(row.cells[0].textContent)

      try {

        const response = await fetch(`/api/producte/${productId}`, {
          method: 'DELETE'
        })
        if (response.ok) {
          alert(`producto ${productId} borrado con exito`)
          getProducts();
        } else {
          alert('error al borrar producto')
        }
      } catch (error) {

      }
    }
  })

}



async function editProduct() {
  const app = document.getElementById('app') as HTMLDivElement;
  const form = document.getElementById('editar') as HTMLFormElement;

  app.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('editar')) {
      const row = target.closest('tr');

      if (!row) return;

      const productId = Number(row.cells[0].textContent);
      const name = row.cells[1].textContent;
      const supplier = row.cells[2].textContent;
      const category = row.cells[3].textContent;

      const productName = document.getElementById('editName') as HTMLInputElement;
      const productSupplier = document.getElementById('editSupplier') as HTMLInputElement;
      const productCategory = document.getElementById('editCategory') as HTMLInputElement;



      productName.value = name;
      productSupplier.value = supplier;
      productCategory.value= category;
      

      form.dataset.id = String(productId);


    }
  })

  form.addEventListener('submit' , async(e) =>{
    e.preventDefault();

    const productId = form.dataset.id;
    const name = (document.getElementById('editName')as HTMLInputElement).value
    const supplier = parseInt((document.getElementById('editSupplier')as HTMLInputElement).value)
    const category = parseInt((document.getElementById('editCategory')as HTMLInputElement).value)


    try{
      const response = await fetch(`/api/producte/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({product_name: name, supplier_id: supplier, category_id: category})
      })

      if(response.ok){
        alert(`producto ${productId}  editado con exito`)
        getProducts();

      }else{
        alert('error al editar')
      }
    }catch(error){
      console.error(error)
    }

  })
}










document.addEventListener('DOMContentLoaded', () => {
  getProducts();
  createproducts();
  deleteProduct();
  editProduct();
})