<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Productos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container mt-4">

    <h1 class="mb-4">Listado de Productos</h1>

    {{-- Filtro --}}
    <form method="GET" class="row g-3 mb-4">
        <div class="col-md-4">
            <input type="text" name="name" class="form-control"
                   placeholder="Nombre del producto"
                   value="{{ request('name') }}">
        </div>

        <div class="col-md-4">
            <input type="number" name="stock" class="form-control"
                   placeholder="Stock mínimo"
                   value="{{ request('stock') }}">
        </div>

        <div class="col-md-4">
            <button class="btn btn-primary">Filtrar</button>
            <a href="{{ route('products.index') }}" class="btn btn-secondary">Limpiar</a>
        </div>
    </form>

    {{-- Tabla --}}
    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Stock</th>
            </tr>
        </thead>
        <tbody>
            @forelse ($products as $product)
                <tr>
                    <td>{{ $product->id }}</td>
                    <td>{{ $product->name }}</td>
                    <td>${{ number_format($product->price, 2) }}</td>
                    <td>{{ $product->stock }}</td>
                </tr>
            @empty
                <tr>
                    <td colspan="4" class="text-center">
                        No hay productos registrados
                    </td>
                </tr>
            @endforelse
        </tbody>
    </table>

</body>
</html>
