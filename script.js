class Sueldos {
    constructor (mes, monto) {
        this.mes = mes;
        this.monto = monto;
    }
}

//INGRESO MONTO SUELDOS
const nuevoSueldo = prompt("Ingresar el monto del sueldo de este mes")

const mesActual = new Date().toLocaleString("default", {month: "long"});

console.log(mesActual)

//ARRAY
const sueldosAnio = [];
const sueldo1 = new Sueldos ("Enero", 90000)
const sueldo2 = new Sueldos ("Febrero", 92000)
const sueldo3 = new Sueldos ("Marzo", 95000)
const sueldo4 = new Sueldos ("Abril", 98000)
const sueldo5 = new Sueldos ("Mayo", 100000)
const sueldo6 = new Sueldos ("Junio", 105000)
const sueldoActual= new Sueldos(mesActual, parseInt(nuevoSueldo))

console.log (sueldosAnio);

//AGREGO AL ARRAY
sueldosAnio.push (sueldo1);
sueldosAnio.push (sueldo2);
sueldosAnio.push (sueldo3);
sueldosAnio.push (sueldo4);
sueldosAnio.push (sueldo5);
sueldosAnio.push (sueldo6);
sueldosAnio.push (sueldoActual);


//FILTER
const sueldosFiltrados = sueldosAnio.filter(sueldo => sueldo.monto >= 100000);

console.log(sueldosFiltrados);

//SUMA SUELDOS 
let total= sueldosAnio.reduce((sumoSueldos, sueldo) => sumoSueldos + sueldo.monto,0);

console.log (total);

let porcentaje;

//CALCULO PORCENTAJE
function jubilacion( total, porcentaje) {
    return (total * porcentaje / 100);
}

do {
   alert ("La suma de los últimos sueldos del año es " + total)
   porcentaje = parseFloat(prompt("Ingrese el porcentaje"))
} 

while(isNaN(total) || isNaN(porcentaje))

let resultado = jubilacion(total, porcentaje)

console.log("El monto a cobrar de jubilación es " + resultado)

alert ("El monto a cobrar de jubilación es " + resultado)
