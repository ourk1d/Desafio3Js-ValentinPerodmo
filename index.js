/* Creo mi objeto*/

class Product {
    constructor(name, condition, size, price){
        this.name = name
        this.condition = condition
        this.size = size
        this.price = price
    }
}

/* Nombro array */

let products = []


/* Funcion para crear productos */

function newProduct() {
    const name = prompt("Ingresa el nombre del articulo");
    const condition = prompt("Ingresa la condicion del articulo");
    const size = prompt("Ingresa el talle del articulo");
    const price = prompt("Ingresa el precio del articulo");

    return new Product(name, condition, size, price);
}

const product = newProduct();
products.push(product);

/*Bucle para crear articulos*/

let option = confirm("Desea agregar articulos al stock?");
while (option) {
	products.push(newProduct())
  option = confirm("Desea agregar articulos al stock?")
}

/*Muestro lista de articulos*/

console.log(products)

