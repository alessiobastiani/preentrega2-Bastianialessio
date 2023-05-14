
let nombre = prompt( " ingrese su nombre ")
let apellido = prompt( " ingrese su apellido ")
alert( "Holaaa " + nombre)
let PreciosM = " Los precios de las motos son:  \nMoto 1: $100.000 \nMoto 2: $200.000 \nMoto 3: $300.000"
alert(PreciosM)
let motos = parseInt(prompt("¿ Quiere comprar la moto, 1 ,2 o 3? "))

while((motos < 1 || motos > 3)){
    motos = parseInt(prompt("¿ Quiere comprar la moto, 1 ,2 o 3? "))
}

console.log("nombre: " + nombre)
console.log("apellido: " + apellido)
console.log("moto numero: " + motos)

const IVA = 0.21
let precioMoto1 = 100000
let precioMoto2 = 200000
let precioMoto3 = 300000

const calculoIva = ( precioMoto1, precioMoto2, precioMoto3, IVA) => {
    switch (motos) {
        case 1:
            let resultado = (precioMoto1 * IVA) + precioMoto1
            return resultado
        case 2:
            let resultado2 = (precioMoto2 * IVA ) + precioMoto2
            return resultado2
        case 3:
        let resultado3 = (precioMoto3 * IVA) + precioMoto3
        return resultado3
    }
}

let PRECIO =  calculoIva(precioMoto1, precioMoto2, precioMoto3, IVA)

alert( " El precio final de su producto es de $ " + PRECIO)
alert( " Felicitaciones " + nombre + " te llevas la mejor moto!!!")

console.log ( " El total a pagar es: $ " + PRECIO )

