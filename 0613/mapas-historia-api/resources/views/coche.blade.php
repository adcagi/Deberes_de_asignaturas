<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Coches</h1>
    <ul>
        @forelse ($coches as $c)
        <li>
            {{ $c->modelo}}
            {{ $c->marca}}
            {{ $c->antigüedad}}
        </li>
        @empty
        <p> No hay coches</p>
        @endforelse
    </ul>
</body>
</html>