let temperatura = Number(prompt(`${nome}, Digite a temperatura em Celsius: `))

if (temperatura >= 30) {
    alert(`${nome}, Está muito quente!`)
    console.log(`${nome}, Está muito quente!`)
} 
if (temperatura < 30) {
    alert(`${nome}, A temperatura esta amena.`)
    console.log(`${nome}, A temperatura esta amena.`)
}
else if (temperatura <= 15) {
    alert(`${nome}, Está frio!`)
    console.log(`${nome}, Está frio!`)
}