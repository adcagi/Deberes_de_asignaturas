// Función para POST (crear evento)
document.getElementById('eventForm').addEventListener('submit', async function(e) {
    e.preventDefault();  // Evita recargar la página

    const data = {
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        location: document.getElementById('location').value,
        event_date: document.getElementById('event_date').value
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/api/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Evento creado: ' + JSON.stringify(result));
            // Limpia el formulario
            document.getElementById('eventForm').reset();
        } else {
            alert('Error: ' + response.status + ' - ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
    }
});

// Función para GET (listar eventos)
document.getElementById('getEventsBtn').addEventListener('click', async function() {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/events');
        
        if (response.ok) {
            const events = await response.json();
            const list = document.getElementById('eventsList');
            list.innerHTML = '';  // Limpia la lista anterior
            
            if (events.length === 0) {
                list.innerHTML = '<p>No hay eventos.</p>';
            } else {
                events.forEach(event => {
                    list.innerHTML += `<p><strong>${event.title}</strong> - ${event.location} (${event.event_date})</p>`;
                });
            }
        } else {
            alert('Error: ' + response.status + ' - ' + response.statusText);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
    }
});