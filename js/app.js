	var numero = parseInt(prompt("Ingresa un número"));
	if (numero % 2 != 0 ) {
	window.alert("Odd!(Impar)" );
} else if (numero % 2 == 0 && numero >= 2 && numero <= 5) {
	window.alert("Good!(Bien)");
} else if ( numero % 2 == 0 && numero >= 6 && numero <= 20) {
	window.alert("Great!(Genial)");
} else {
	window.alert("Perfect!(Perfecto)");
}