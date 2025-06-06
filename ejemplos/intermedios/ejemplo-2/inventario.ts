// Ejemplo 2 - Inventario con Map y funciones de Orden superior
// Qué hara el código:
// Usa un Map como inventario para guardar productos con su id como clave.
// Permite agregar productos y actualizar su stock.
// Devuelve una lista de productos disponibles (stock > 0).
// Calcula el valor total del inventario multiplicando precio por stock.
// Maneja errores si se agregan productos repetidos o se actualizan productos inexistentes.

// __________________________________
// Clase para inventario:

type TipoProductos = {
  nombre: string;
  precio: number;
  stock: number;
}

class ClassInventario {
  private productos: Map<number, TipoProductos>;

  constructor() {
    this.productos = new Map<number, TipoProductos>();
  }

  // Metodos:
  public agregarProducto(id: number, {nombre, precio, stock}: TipoProductos): void {
    // Verificamos si existe un producto con el mismo nombre:
    const existeNombre = Array.from(this.productos.values())
      .some( valueProducto => valueProducto.nombre.toLowerCase() === nombre.toLowerCase());
    
    if(this.productos.has(id) ) {
      console.log(`El producto con el ID ${id} ya existe.`);
      return;
    } else if(existeNombre) {
      console.log(`El producto con el nombre ${nombre} ya existe.`);
      return;
    }
    this.productos.set(id, {nombre, precio, stock})
  }

  public actualizarStock(id: number, cantidad: number): void {
    if(!this.productos.has(id)) console.log('Producto no encontrado.');
    const producto = this.productos.get(id);
    if(producto){
      producto.stock += cantidad;
      this.productos.set(id, producto);
    }
  }

  public obtenerProductosDisponibles(): Array<{id: number} & TipoProductos> {
    return [...this.productos.entries()]
    .filter(([_, prod]) => prod.stock > 0)
    .map(([id, prod]) => ({id, ...prod}));
  }

  public calcularValorTotal() {
    return [...this.productos.values()]
      .reduce( (total, prod) => total + prod.precio * prod.stock, 0);
  }


}

// Realizamos la prueba:
const product1: TipoProductos = {
  nombre: "camisa",
  precio: 20,
  stock: 5
}

const product2: TipoProductos = {
  nombre: "pantalon",
  precio: 40,
  stock: 0
}

// No usamos el type de "TiposProductos"
const product3 = {
  nombre: "cinturon",
  precio: 25,
  stock: 10
}

const product4: TipoProductos = {
  nombre: "medias",
  precio: 10,
  stock: 32
}

const product5: TipoProductos = {
  nombre: "camisa",
  precio: 35,
  stock: 8
}

const product6: TipoProductos = {
  nombre: "poleras",
  precio: 15,
  stock: 35
}

try {
  
  const nuevoinventario = new ClassInventario();
  
  nuevoinventario.agregarProducto(1, product1);
  // El producto con ID: 2 no se mostrara ya que el stock es "0"
  nuevoinventario.agregarProducto(2, product2); 
  nuevoinventario.agregarProducto(3, product3);
  nuevoinventario.agregarProducto(4, product4);
  nuevoinventario.agregarProducto(5, product5);
  nuevoinventario.agregarProducto(3, product6);

  // Actualizamos el producto con ID: 2
  nuevoinventario.actualizarStock(2, 5);

  console.log(nuevoinventario.obtenerProductosDisponibles())
  console.log('Valor total de todos los productos: ', nuevoinventario.calcularValorTotal());

} catch (error) {
  console.error('Error:', error)
}






