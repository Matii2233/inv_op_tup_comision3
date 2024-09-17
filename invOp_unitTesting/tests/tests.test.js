// 1 - FUNCION VALIDAR PIN
function validarPin(pin) {

    if (typeof pin !== 'number') {
        return false;
    }

    const pinComoCadena = pin.toString();
    const regex = /^\d{4}$|^\d{6}$/;

    return regex.test(pinComoCadena)
}

// PRUEBA UNITARIA - FUNCION VALIDAR PIN
test("Debe devolver true si el pin tiene exactamente 4 o 6 caracteres numericos enteros", () => {
    expect(validarPin(123)).toBe(false);
    expect(validarPin(2233)).toBe(true);
    expect(validarPin("123a")).toBe(false);
    expect(validarPin(267391)).toBe(true);
    expect(validarPin(1099836)).toBe(false);
})








// 2 - FUNCION - DEVOLVER VOLUMEN DE UN TANQUE
function devolverVolumenTanque(diametro, altura, centimetros) {
    // el valor centimetros ocupara true: centimetros o false:mtros

    if (centimetros) {
        const litros = Math.PI * Math.pow(diametro/2, 2) * altura / 1000
        return `El tanque tendra un volumen de ${litros.toFixed(2)} litros`
    } else {
        const litros = Math.PI * Math.pow(diametro/2, 2) * altura * 1000
        return `El tanque tendra un volumen de ${litros.toFixed(2)} litros`
    }
}

// PRUEBA UNITARIA - FUNCION DEVOLVER VOLUMEN DE UN TANQUE
test(`debe recibir la altura y el diametro para calcular el volumen de un tanque (cilindro).
    debe devolver el resultado correcto en litros y los datos de entrada pueden ser en mm o en m`,
    ()=>{
        expect(devolverVolumenTanque(30, 150, true)).toBe("El tanque tendra un volumen de 106.03 litros")
        expect(devolverVolumenTanque(1, 5, false)).toBe("El tanque tendra un volumen de 3926.99 litros")
    }
)









// 3 - FUNCION - DEVOLVER LOS LITROS DE AGUA DADO EL TIEMPO DE PEDALEO
// 0.5 litros de agua por cada hora o 0.0083 litros por minuto

function devolverLitrosDeAgua(horas) {
    if (typeof horas === 'number' && !isNaN(horas)) {
        return `${Math.round(horas * 0.5)} litros de agua en ${horas} horas`;
    } else {
        return "No es un numero";
    }
}

test(`debera devolver 0.5 litros de agua por cada hora
    que se introduzca en la funcion, redondeando el resultado`,
    ()=>{
        expect(devolverLitrosDeAgua(1.5)).toBe(`1 litros de agua en 1.5 horas`)
        expect(devolverLitrosDeAgua(2)).toBe(`1 litros de agua en 2 horas`)
        expect(devolverLitrosDeAgua("4.6")).toBe(`No es un numero`)
        expect(devolverLitrosDeAgua("HOLA")).toBe("No es un numero")
        expect(devolverLitrosDeAgua(undefined)).toBe("No es un numero")
        expect(devolverLitrosDeAgua(NaN)).toBe("No es un numero")
        expect(devolverLitrosDeAgua(null)).toBe("No es un numero")
    })








// 4 - FUNCION - DEVOLVER EL SIGLO CORRESPONDIENTE
function devolverSiglo(año) {
    let siglo = 1;

    for (let i = 0; i < 10000; i = i + 100) {
        
        if (año >= i && año < i+100 && i >= 0) {

            return `${siglo}DC`
        }
        if (año>9999 || año<0) {

            return `¡Año fuera de rango!`
        }

        siglo++;
    }
}

// PRUEBA UNITARIA - FUNCION DEVOLVER EL SIGLO CORRESPONDIENTE
test(`Debera recibir un año y devolver el siglo correspondiente`,
    ()=>{
        expect(devolverSiglo(0)).toBe("1DC");
        expect(devolverSiglo(1)).toBe("1DC");
        expect(devolverSiglo(-1)).toBe("¡Año fuera de rango!");
        expect(devolverSiglo(100)).toBe("2DC");
        expect(devolverSiglo(99)).toBe("1DC");
        expect(devolverSiglo(2024)).toBe("21DC");
    }
)








// Crea una función que dada dos entradas devuelven quien gana, en caso de empate indica empate.
// FUNCION - PIEDRA PAPEL O TIJERA
function piedraPapelTijera(jugador1, jugador2){
    if(jugador1!=='piedra' && jugador1!=='papel' && jugador1!=='tijera' || jugador2!=='piedra' && jugador2!=='papel' && jugador2!=='tijera'){
        return "! Eso es trampa ¡"
    }
    if(jugador1===jugador2) return `¡EMPATE!`
    if(jugador1==='papel' && jugador2==='tijera') return "jugador 2 vencedor"
    if(jugador1==='papel' && jugador2==='piedra') return "jugador 1 vencedor"
    if(jugador1==='tijera' && jugador2==='piedra') return "jugador 2 vencedor"
    if(jugador1==='tijera' && jugador2==='papel') return "jugador 1 vencedor"
    if(jugador1==='piedra' && jugador2==='papel') return "jugador 2 vencedor"
    if(jugador1==='piedra' && jugador2==='tijera') return "jugador 1 vencedor"
}

// PRUEBA UNITARIA - FUNCION PIEDRA PAPEL O TIJERA
test(`Debe aceptar 'piedra', 'papel' o 'tijera' para el jugador 1 y para el jugador 2
    y la funcion devolvera quien es el ganador caso contrario se rechaza el procedimiento.
    Si se ingresan iguales valores, la funcion devolvera empate`,
    ()=>{
        expect(piedraPapelTijera('papel', 'tijera')).toBe('jugador 2 vencedor')
        expect(piedraPapelTijera('papel', 'piedra')).toBe('jugador 1 vencedor')
        expect(piedraPapelTijera('piedra', 'tijera')).toBe('jugador 1 vencedor')
        expect(piedraPapelTijera('piedra', 'papel')).toBe('jugador 2 vencedor')
        expect(piedraPapelTijera('tijera', 'papel')).toBe('jugador 1 vencedor')
        expect(piedraPapelTijera('tijera', 'piedra')).toBe('jugador 2 vencedor')
        expect(piedraPapelTijera('tijera', 'tijera')).toBe('¡EMPATE!')
        expect(piedraPapelTijera('piedra', 'piedra')).toBe('¡EMPATE!')
        expect(piedraPapelTijera('papel', 'papel')).toBe('¡EMPATE!')
        expect(piedraPapelTijera('tijera', 'cuchilla')).toBe('! Eso es trampa ¡')
    }
)








// FUNCION - VALIDAR DIRECCION
function validarDireccion(jsonDir){
    const dirValidaJson = `{
        "street":"Oliva",
        "number":123,
        "floor_apartment":"D1",
        "zip_code":3477,
        "town":"Plantaciones",
        "city":"Botanica",
        "province":"Verde"
    }`

    const dirValida = JSON.parse(dirValidaJson)
    const dir = JSON.parse(jsonDir)
    
    for (let key in dir) {

        if (dir.hasOwnProperty(key)) {

            if(dir[key] === ""){
                return `Uno de los campos esta incompleto`
            }
            if(dir[key] !== dirValida[key]){
                return false
            }
        }
    }
    
    return true
}

// PRUEBA UNITARIA - FUNCION VALIDAR DIRECCION
test(`Debe recibir una direccion en formato json y convertirla a un objeto para recorrerlo y validar cada campo de la direccion.
    La funcion devuleve TRUE cuando se consiguen validar todos los campos`,
    () => {
        const dir1 = `{"street":"Oliva",
            "number":123,
            "floor_apartment":"",
            "zip_code":3477,
            "town":"Plantaciones",
            "city":"Botanica",
            "province":"Verde"}`
        
        const dir2 = `{"street":"Oliva",
            "number":123,
            "floor_apartment":"D4",
            "zip_code":3477,
            "town":"Plantaciones",
            "city":"Botanica",
            "province":"Verde"}`

        const dir3 = `{
            "street":"Oliva",
            "number":123,
            "floor_apartment":"D1",
            "zip_code":3477,
            "town":"Plantaciones",
            "city":"Botanica",
            "province":"Verde"}`

        expect(validarDireccion(dir1)).toBe('Uno de los campos esta incompleto')
        expect(validarDireccion(dir2)).toBe(false)
        expect(validarDireccion(dir3)).toBe(true)
    }
)