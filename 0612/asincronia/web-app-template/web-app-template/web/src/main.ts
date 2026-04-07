import 'bootstrap/dist/css/bootstrap.min.css';   
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

interface Producte {
  product_id:number,
  product_name:string,
  supplier_id?:number | null;
  category_id?:number | null;
}

export async function getProducts() {
  const response = await fetch('/api/producte');
  const data = (await response.json()) as Producte[];
  let app = document.getElementById('app') as HTMLDivElement;

  let aux = `<table border="1" cellpadding="5">
               <tr>
                 <th>ID</th>
                 <th>Nombre</th>
                 <th>Proveedor</th>
                 <th>Categoría</th>
                 <th>Editar</th>
                 <th>Borrar</th>
               </tr>`;

  for (let producte of data) {
    aux += `<tr>
              <td>${producte.product_id}</td>
              <td>${producte.product_name}</td>
              <td>${producte.supplier_id}</td>
              <td>${producte.category_id}</td>
              <td><button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modal2">
                    <i class="bi bi-pencil editar"></i> 
                  </button>
              </td>
              <td><button type="button" class="btn btn-danger borrar">
                      Borrar
                  </button>
              </td>
            </tr>`;
  }

  aux += '</table>';
  app.innerHTML = aux;
}

 document.addEventListener('DOMContentLoaded', () => {

   getProducts(); 
 });