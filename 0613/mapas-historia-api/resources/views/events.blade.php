<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestión de Eventos</title>
    <style>
        /* Estilos básicos para el formulario */
        body { font-family: Arial, sans-serif; margin: 20px; }
        form { margin-bottom: 20px; }
        label { display: block; margin: 10px 0 5px; }
        input, textarea { width: 100%; padding: 8px; }
        button { padding: 10px 15px; background: #007bff; color: white; border: none; cursor: pointer; }
        button:hover { background: #0056b3; }
        #eventsList { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>Crear Evento (POST)</h1>
    <form id="eventForm">
        @csrf  <!-- Token CSRF si es necesario para rutas web, pero no para API -->
        <label for="title">Título:</label>
        <input type="text" id="title" name="title" required>

        <label for="description">Descripción:</label>
        <textarea id="description" name="description" required></textarea>

        <label for="location">Ubicación:</label>
        <input type="text" id="location" name="location" required>

        <label for="event_date">Fecha del Evento:</label>
        <input type="date" id="event_date" name="event_date" required>

        <button type="submit">Crear Evento</button>
    </form>

    <h1>Listar Eventos (GET)</h1>
    <button id="getEventsBtn">Obtener Eventos</button>
    <div id="eventsList"></div>

    <script>
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
                const response = await fetch('{{ url("/api/events") }}', {  // Usa helper de Laravel para la URL
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const result = await response.json();
                    alert('Evento creado: ' + JSON.stringify(result));
                    document.getElementById('eventForm').reset();  // Limpia el formulario
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
                const response = await fetch('{{ url("/api/events") }}');  // URL dinámica con Laravel
                
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
    </script>
</body>
</html>