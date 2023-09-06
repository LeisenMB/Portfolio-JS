let sales = [];
let nextSales = 1;

// Función para generar un ID de venta
function generateSaleId() {
  const saleId = `V${nextSales}`; // Utiliza una combinación de "V" + número para el ID
  nextSales++;
  return saleId;
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    addSale();
  }
}

function handleKeyPress2(event) {
  if (event.key === "Enter") {
    delsale();
  }
}

// Función para actualizar la lista de ventas en el archivo HTML
function updateSaleList() {
  const saleList = document.getElementById("Sale");
  saleList.innerHTML = ""; // Borra todas las ventas existentes en la lista

  sales.forEach(function (sale) {
    const listItem = document.createElement("li");
    listItem.textContent = `ID: ${sale.id} | Descripción: ${sale.product} | Precio: ${sale.price} | Cantidad: ${sale.quantity} | Total: ${sale.total}`;
    saleList.appendChild(listItem);
  });
}

// Función para agregar una venta
function addSale() {
  // Obten el valor del campo de entrada
  const saleInput = document.getElementById("saleinput");
  const saleText = saleInput.value.toLowerCase();
  const salecanti = document.getElementById("canti").value;

  // Busca el producto en el arreglo products
  const product = products.find(p => p.name === saleText);

  // Verifica si se ingresó texto en el campo de entrada
  if (saleText.trim() !== "") {
    // Verifica si se encontró el producto
    if (product) {
      // Crea un objeto de venta con el ID generado, la descripción del producto y el precio
      const sale = {
        id: generateSaleId(),
        product: product.name,
        price: product.price,
        quantity: salecanti,
        total: product.price * salecanti
      };

      // Agrega la venta al arreglo
      sales.push(sale);

      // Actualiza la lista de ventas en el archivo HTML
      updateSaleList();

      // Limpia el campo de entrada
      saleInput.value = "";
    } else {
      window.alert("El producto no se encuentra en la lista.");
    }
  } else {
    window.alert("Por favor, ingrese una descripción de producto válida.");
  }
   // Llama a la función para mostrar el total de ventas
   updateTotalSales();

}

function delsale() {
  const saleinput2 = document.getElementById("saleinput2");
  const saledeltext = saleinput2.value;
  
  //const index = sales.findIndex(sale => sale.id === saledeltext);
  const index = sales.findIndex(sale => sale.id.toLowerCase() === saledeltext);

  if (index != -1){
    sales.splice(index, 1);
    window.confirm('Venta eliminada.');
  }
  else {
    window.confirm('No existe la ID');
  } 
  updateSaleList();
  saleinput2.value= "";
  updateTotalSales();
}



const totalSalesElement = document.getElementById("totalSales");
function getTotalSales() {
  const total = sales.reduce((sum, sale) => sum + sale.total, 0);
  return total;
}

// Actualiza el valor del total de ventas en el archivo HTML
function updateTotalSales() {
  const totalSales = getTotalSales();
  totalSalesElement.textContent = totalSales;
}

let products = [
  { name: "cafe", price: 500 },
  { name: "te", price: 350 },
  { name: "empanada", price: 750 },
  { name: "arepa", price: 850 },
];