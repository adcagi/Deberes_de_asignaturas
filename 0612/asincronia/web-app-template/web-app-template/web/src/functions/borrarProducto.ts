import { getProducts } from "../main";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app") as HTMLDivElement;
  getProducts();

  app.addEventListener("click", async (e) => {
    const target = e.target as HTMLElement;

    if (target.classList.contains("borrar") || target.closest(".borrar")) {
      const row = target.closest("tr");
      if (!row) return;

      const productId = Number(row.cells[0].textContent);

      try {
        const response = await fetch(`/api/producte/${productId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Error al borrar el producto");
        }

        alert(`Producto con Id ${productId} borrado correctamente`);
        getProducts();
      } catch (error: any) {
        console.error("Error borrando el producto", error);
        alert(`No se pudo borrar el producto: ${error.message}`);
      }
    }
  });
});