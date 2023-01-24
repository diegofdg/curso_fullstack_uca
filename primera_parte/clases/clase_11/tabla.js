
/**
 * Dado un numero de filas y columnas, 
 * desarrollar una funcion que permita crear una tabla en HTML
 * y la muestre en pantalla
 */

/**
 * Definimos la funcion crearTablaHTML
 * @param {*} filas 
 * @param {*} columnas
 * @param {*} id 
 */
function crearTablaHTML(filas, columnas, id) {

    var tabla = "";
    for (var i = 1; i <= filas; i++) {
    
        console.log("i vale: "+i);
    
        tabla += "<tr>";
    
        for (var j = 0; j < columnas; j++) {
            tabla += "<td>"+j+"</td>";
            console.log("j vale: "+j);
        }
    
        tabla += "</tr>";
    }
    
    document.getElementById(id).innerHTML = tabla;
}

//Invocamos a la funcion crearTablaHTML
crearTablaHTML(8, 6, "tabla");

crearTablaHTML(3, 3, "tabla2");

crearTablaHTML(5, 2, "tabla3");

//for (x = 0; x < 100; x = x+5) {
for (x = 100; x >= 0; x -= 3) {
    console.log("x vale :"+x);
}