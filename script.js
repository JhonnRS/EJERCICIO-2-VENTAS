const ventaForm = document.getElementById('ventaForm');
const ventasRegistradas = document.getElementById('ventasRegistradas');

ventaForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const producto = document.getElementById('producto').value;
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);
    
    const totalVenta = cantidad * precio;
    
    const ventaItem = document.createElement('div');
    ventaItem.classList.add('venta-item');
    ventaItem.innerHTML = `
        <p><strong>Producto:</strong> ${producto}</p>
        <p><strong>Cantidad:</strong> ${cantidad}</p>
        <p><strong>Precio Unitario:</strong> $${precio.toFixed(2)}</p>
        <p><strong>Total:</strong> $${totalVenta.toFixed(2)}</p>
    `;
    
    ventasRegistradas.appendChild(ventaItem);
    
    // Limpiar el formulario después de registrar la venta
    ventaForm.reset();
});
