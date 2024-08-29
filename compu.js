let rojo = 100;
let verde = 100;
let azul = 100;

function actualizarFondo() {
    // Usar acentos graves (`) para la interpolación de cadenas
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

    // Usar acentos graves (`) y corregir los nombres de las variables
    document.getElementById("colorRojo").innerText = `Rojo: ${rojo}`;
    document.getElementById("colorVerde").innerText = `Verde: ${verde}`;
    document.getElementById("colorAzul").innerText = `Azul: ${azul}`;
}

// Agregar eventos para los botones
document.getElementById("subeRojo").addEventListener("click", function() {
    if (rojo < 255) rojo += 5;
    actualizarFondo();
});

document.getElementById("bajarRojo").addEventListener("click", function() {
    if (rojo > 0) rojo -= 5;
    actualizarFondo();
});

document.getElementById("subeVerde").addEventListener("click", function() {
    if (verde < 255) verde += 5;
    actualizarFondo();
});

document.getElementById("bajarVerde").addEventListener("click", function() {
    if (verde > 0) verde -= 5;
    actualizarFondo();
});

document.getElementById("subeAzul").addEventListener("click", function() {
    if (azul < 255) azul += 5;
    actualizarFondo();
});

document.getElementById("bajarAzul").addEventListener("click", function() {
    if (azul > 0) azul -= 5;
    actualizarFondo();
});
