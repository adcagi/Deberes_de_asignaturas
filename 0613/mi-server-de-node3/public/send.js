document.addEventListener('DOMContentLoaded', () =>{
    const form1 = document.getElementById('contactos');
    const form2 = document.getElementById('coches');

    form2.addEventListener('submit', async(e) =>{
        e.preventDefault();
        const data ={
            marca: document.getElementById('marca').value,
            modelo: document.getElementById('modelo').value
        }

        try{
            const response = await fetch('http://localhost:3000/coches', {
                method: 'POST',
                headers: {
                    'Content-Type':  'application/json'
                },
                body: JSON.stringify(data)
            })
            if(response.ok){
                const result= await response.json();
                alert(`coche ${result.id} añadido`);
                form2.reset();
            }else{
                const error = await response.json();
                alert(`error ${error.message}`); 
            }
        }catch(error){
            console.error(error);
            alert('error al insertar coche')
        }
    })

    form1.addEventListener('submit', async(e) =>{
        e.preventDefault();

        const data = {
            nom: document.getElementById('nom').value,
            cognoms: document.getElementById(`cognoms`).value,
            telefon: Number(document.getElementById('telefon').value),
            descripcio: document.getElementById(`descripcio`).value
        }

        try{
            const response = await fetch('http://localhost:3000/contactes', {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if(response.ok){
                const result = await response.json();
                alert (`contacto ${result.id} creado`);
                form1.reset()
            }else{
                const error = await response.json();
                alert(`error ${error.message}`)
            }
        }catch (error){
            console.error(error);
            alert('error al intentar conectar')
        }
    })
})