let nota = 100;

if (nota >= 90 && nota <= 100) {
    console.log("El estudiante aprueba con Excelente")
} else if (nota <=89 && nota >=75){
    console.log("El estudiante aprueba con Bien")
} else if (nota <=74 && nota >=60){
    console.log("El estudiante aprueba con Suficiente")
} else if (nota < 60 && nota >= 0){
    console.log("El estudiante no aprueba")
} else {
    console.log("No aplica esta nota")
}