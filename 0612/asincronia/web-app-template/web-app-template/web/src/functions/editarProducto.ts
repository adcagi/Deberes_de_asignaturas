import { getProducts } from "../main";

document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('editar') as HTMLFormElement;



    form.addEventListener('submit', async(e) =>{
        e.preventDefault();
        const name =(document.getElementById('editName') as HTMLInputElement).value;
        const supplier = (document.getElementById('editSupplier') as HTMLInputElement).value;
        const category =(document.getElementById('editCategory')as HTMLInputElement).value;
        const modal = document.getElementById('modal2') as HTMLDivElement;
        const productId = Number(modal.dataset.product_id);


        const data = {
            product_name : name,
            supplier_id: Number(supplier),
            category_id: Number(category)
        }

        try{
            const response = await fetch(`/api/producte/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if(response.ok){
                alert(`producto ${productId} editado`)
                getProducts();

            }else{
                alert('error al editar')
            }
        }catch (error){
            console.error(error);
            alert(`Ha habido un error: ${error}`)
        }
    })

})