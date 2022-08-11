//fecha y tiempo actual

let ahora= new Date();
alert(ahora);
alert(ahora.toLocaleString());
console.log(new Date())


//Funcion saludar!

function Saludar (){
let nombreIngresado= prompt ("ingresar Nombre");
let apellidosIngresado=prompt ("ingresar Apellidos");
alert ("el nombre ingresado es:" + nombreIngresado+ " "+ apellidosIngresado);
alert("Buenos Dias:" + nombreIngresado+ " "+apellidosIngresado);
}
Saludar();

//funcion con Parametros y return

function calcularIva(precio){
    let precioConIva= precio * 1.21;
    console.log("El precio con iva es: $" +precioConIva);
    return precioConIva;

}

let conIva = calcularIva (7500);
//llevando 2 productos o mas se aplican descuentos

function aplicarDescuento(precio){
return precio * 0.9;

}
let precioDesc=aplicarDescuento(7500);
console.log("El precio con Descuento es: $" +precioDesc); 


//pido la direccion al cliente a donde deberia enviar el Producto...

let direccion = prompt("ingrese su domicilio(calle,numero)");
console.log("su direccion es:" + direccion);


//ARRAYS DE PRODUCTOS...
const listaRopas= ["zapatillas","buzo Adida","conjunto psg","Buzo Nike","Remera","Joguin","jeans"]

let aBuscar=prompt("Ingresa La ropa que quieras Buscar");
let posicion=listaRopas.indexOf(aBuscar);
if(posicion != -1){
    alert(aBuscar+" " +"esta en la lista en la posicion: " +posicion);
}
else{
    alert("no se encuentra en la lista");
}
console.log(listaRopas); 


//array con objetos..
const Ropas=[

{
    codigo:"1234555",
    articulo:"Remera",
    precio: 1090.00
},
{
    codigo:"67578833",
    articulo: "conjunto PSG",
    precio:7500.00
},
{  
    codigo:"84784",
    articulo: "Buzo nikke",
    precio:2800.00
},
{
    codigo:"567883",
    articulo:"zapatillas",
    precio: 6790.00
},
{
    codigo:"900336",
    articulo:"buzo Adida",
    precio:2850.00
},
{
    codigo:"90365432",
    articulo: "jeans",
    precio: 4500.00
},
{
    codigo:"456231",
    articulo:"joguin",
    precio: 3500.00
},
];
console.table(Ropas);

//ejemplo con Find

let codigoPreguntado=prompt("ingresa el codigo de ropa a Buscar");

const ropaEncontrada = Ropas.find(ropa => ropa.codigo === codigoPreguntado);
if(ropaEncontrada == undefined){
   alert("Producto no encontrado");
}
else{
   alert(`Codigo: ${ropaEncontrada.codigo} \narticulo: ${ropaEncontrada.articulo} \nprecio: ${ropaEncontrada.precio}`)
}