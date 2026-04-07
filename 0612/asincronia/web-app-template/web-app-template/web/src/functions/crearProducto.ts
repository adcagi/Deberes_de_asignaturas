document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('crear') as HTMLFormElement;
    const state = document.getElementById('createState') as HTMLElement;


    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        state.innerText = 'esperando respuesta';

        const nom = document.getElementById('nombre') as HTMLInputElement;
        const proveidor = document.getElementById('proveedor') as HTMLInputElement;
        const categoria = document.getElementById('categoria') as HTMLInputElement;

        try {
            const response = await fetch('/api/producte', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product_name: nom.value,
                    supplier_id: Number(proveidor.value),
                    category_id: Number(categoria.value),
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al intentar crear un producto')
            }

            const data = await response.json();
            alert(`Producto ${data.product_id} creado`);
            state.innerText = 'producto creado';
            form.reset();

        } catch (error: any) {
            alert(`No se pudo crear el producto ${error.message}`);
            console.error(error);
        }


    })
})