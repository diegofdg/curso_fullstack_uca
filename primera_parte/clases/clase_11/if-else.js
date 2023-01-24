
var edad = 35;

if (edad == 1) {
    console.log("Tenes 1 año");
} else if (edad == 2) {
    console.log("Tenes 2 años");
    // ... else if 3 al 33
} else if (edad == 34) {
    console.log("Tenes 34 años");
} else {
    console.log("Tenes 35 años");
}

switch (edad) {
    case 1:
        console.log("Tenes 1 año");
        break;
    case 35:
        console.log("Tenes 35 años");
        break;
    default:
        console.log("No tenes entre 1-35 años");
        break;
}