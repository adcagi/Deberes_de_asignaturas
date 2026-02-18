<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Animales con Clases PHP</title>
</head>
<body>
    <h1>Ejemplo de Clases en PHP con Herencia e Interfaces</h1>
    
    @foreach($animales as $tipo => $animal)
        <h2>{{ ucfirst($tipo) }}: {{ $animal['nombre'] }}</h2>
        <p>{{ $animal['comer'] }}</p>
        <p>{{ $animal['hablar'] }}</p>
    @endforeach

    <h3>Explicación:</h3>
    <ul>
        <li><strong>Interfaz Habitable:</strong> Obliga a implementar <code>hablar()</code>.</li>
        <li><strong>Clase Animal:</strong> Base con propiedades y métodos comunes.</li>
        <li><strong>Herencia:</strong> Perro y Gato extienden Animal y heredan <code>comer()</code>.</li>
        <li><strong>Uso en Blade:</strong> PHP procesa las clases y pasa datos a la vista.</li>
    </ul>
</body>
</html>