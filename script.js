/*     EJERCICIO 1 
=======================
*/
/*
let varones = +prompt("Ingresar Cantidad de Varones:")
let mujeres = +prompt("Ingresar Cantidad de Mujeres:")

let pvarones = (varones / (varones + mujeres)) * 100
let pmujeres = (mujeres / (mujeres + varones)) * 100 

alert(`El Porcentaje de Varones es: ${pvarones}%`)
alert(`El Porcentaje de Mujeres es: ${pmujeres}%`)

*/
/*     EJERCICIO 2 
=======================
*/
/*
let monto = +prompt("Ingresar Monto para Reparación:")
let montoInicial = monto

let aven1 = monto * 0.35
let aven2 = monto * 0.25
let aven3 = monto * 0.10
let aven4 = monto * 0.15
let suma =  parseInt(aven1 + aven2 + aven3 + aven4)
let aven5 = (monto - suma)

alert(`La Avenida La mar Recibirá: S/. ${aven1} .00`)
alert(`La Avenida Abancay Recibirá: S/. ${aven2} .00`)
alert(`La Avenida 28 de Julio Recibirá: S/. ${aven3} .00`)
alert(`La Avenida Aviación Recibirá: S/. ${aven4} .00`)
alert(`La Avenida Tacna Recibirá: S/. ${aven5} .00`)

*/

/*     EJERCICIO 3 
=======================
*/

let CantGeneral = +prompt("Ingresar Cantidad de Entradas Vendidas General:")
let CantMayor = +prompt("Ingresar Cantidad de Entradas Vendidas para mayores 65:")
let CantMenor = +prompt("Ingresar Cantidad de Entradas Vendidas para menores:")

let montoGeneral = parseInt(CantGeneral * 150)
let montoMayor = parseInt(CantGeneral * 50)
let montoMenor = parseInt(CantGeneral * 80)

let montoTotal = parseInt(montoGeneral + montoMayor + montoMenor)

alert(`Dinero Recaudado Entradas General: ${montoGeneral}`)
alert(`Dinero Recaudado Entradas para mayores: ${montoMayor}`)
alert(`Dinero Recaudado Entradas para menores: ${montoMenor}`)
alert(`Dinero Total Recaudado: ${montoGeneral}+${montoMayor}+${montoMenor} = ${montoTotal}`)
