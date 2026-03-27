import { getProducts } from "../main"
document.addEventListener('DOMContentLoaded', () =>{
    const app = document.getElementById('app') as HTMLDivElement;
    getProducts();


    app.addEventListener('click', async(e) =>{
        const modal  = document.getElementById('modal2') as HTMLDivElement;
        const target = e.target as HTMLElement;
        console.log(target)


        if(target.classList.contains('editar')){
            const row = target.closest('tr');
            if(!row) return;


            const name = row.cells[1].textContent;
            const supplier = row.cells[2].textContent;
            const category = row.cells[3].textContent;

            (document.getElementById('editName') as HTMLInputElement).value = name || '';
            (document.getElementById('editSupplier') as HTMLInputElement).value = supplier || '';
            (document.getElementById('editCategory') as HTMLInputElement).value = category || '';



            const productId  = Number(row.cells[0].textContent);
            modal.dataset.product_id = productId.toString();

        }
    })

})