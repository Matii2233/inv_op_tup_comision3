function devolverSiglo(año) {
    let siglo = 1;

    for (let i = 0; i < 10000; i = i + 100) {
        
        if (año >= i && año < i+100 && i >= 0) {

            return console.log(`${siglo}DC`)
        }
        if (año>9999 || año<0) {

            return console.log(`¡Año fuera de rango!`)
        }

        siglo++
    }
}

devolverSiglo(0)
devolverSiglo(1)
devolverSiglo(-1)
devolverSiglo(100)
devolverSiglo(99)
devolverSiglo(2024)