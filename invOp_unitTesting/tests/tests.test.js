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