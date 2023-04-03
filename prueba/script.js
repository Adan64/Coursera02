function saludar() {
	// Array con los nombres
	var nombres = ["Juan", "Ana", "Pedro", "Jorge", "Marta"];

	// Recorre el array de nombres
	for (var i = 0; i < nombres.length; i++) {
		// Obtiene el nombre actual y lo convierte a minúsculas
		var nombreActual = nombres[i].toLowerCase();

		// Verifica si el nombre comienza con "j"
		if (nombreActual.charAt(0) === "j") {
			console.log("Goodbye " + nombres[i]);
		} else {
			console.log("Hello " + nombres[i]);
		}
	}

	// Muestra el saludo en la página web
	document.getElementById("saludo").innerHTML = "¡Saludos!";
}
