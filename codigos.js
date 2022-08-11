//fecha y tiempo actual
console.log(new Date())
let ahora= new Date();
alert(ahora);

function Saludar (){
let nombreIngresado= prompt ("ingresar Nombre");
let apellidosIngresado=prompt ("ingresar Apellidos");
alert ("el nombre ingresado es:" + nombreIngresado+ " "+ apellidosIngresado);
console.log("Buenos Dias:" + nombreIngresado+ " "+apellidosIngresado);
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

let aBuscar=prompt("Ingresa La ropa que quieras Buscar").toUpperCase();
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
    Articulo:"Remera",
    Precio: 1090.00
},
{
    codigo:"67578833",
    Articulo: "conjunto PSG",
    Precio:7500.00
},
{  
    codigo:"84784",
    Articulo: "Buzo nikke",
    Precio:2800.00
},
{
    codigo:"567883",
    Articulo:"zapatillas",
    Precio: 6790.00
},
{
    codigo:"900336",
    Articulo:"buzo Adida",
    Precio:2850.00
},
{
    codigo:"90365432",
    Articulo: "jeans",
    Precio: 4500.00
},
{
    codigo:"456231",
    Articulo:"joguin",
    Precio: 3500.00
},
];
console.table(Ropas) 


let codigo=prompt("ingresa el codigo de ropa a Buscar");
for(const Ropa of Ropas){
    if(Ropas.codigo == codigo){
        alert("Ropa encontrada!!")
        console.log(Ropas);
    }
}
//Paso el objeto a String..
let aString= Ropas.forEach(Ropa=>Ropas.codigo+ "\n" +Ropas.Articulo +"\n"+ Ropas.Precio);

alert(aString);

let RopaEncontrada;
RopaEncontrada=Ropas;
console.log(" La ropa se encuentra en el deposito" + Ropas.indexOf(RopaEncontrada));


