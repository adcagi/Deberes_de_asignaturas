import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

const products = [
  { id: 1, name: "Producto A", price: 10, image: "https://via.placeholder.com/100" },
  { id: 2, name: "Producto B", price: 20, image: "https://via.placeholder.com/100" },
  { id: 3, name: "Producto C", price: 30, image: "https://via.placeholder.com/100" }
];

export default function Shop() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Tienda</h1>
        <Sheet>
          <SheetTrigger>
            <Button variant="outline">
              <ShoppingCart className="mr-2" /> Carrito ({cart.length})
            </Button>
          </SheetTrigger>
          <SheetContent>
            <h2 className="text-lg font-bold mb-4">Carrito</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">El carrito está vacío</p>
            ) : (
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 border-b py-2">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded" />
                    <span>{item.name} - ${item.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </SheetContent>
        </Sheet>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-4">
            <CardContent>
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-700">${product.price}</p>
              <Button onClick={() => addToCart(product)} className="mt-2 w-full">Añadir al carrito</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
