$(document).ready(function () {
    // 1. Usando jQuery, se obtiene el valor del input con id searchForm
    $('#searchForm').on('submit', function (event) {
        event.preventDefault();
        const heroId = $('#heroId').val().trim(); //heroId no va a cambiar una vez capturado, por eso const.
        const errorMessage = $('#error-message'); // Se define la variable 'errorMessage'


        // Notas para leer el código: submit: Detecta el envío del formulario. preventDefault(): Previene que el formulario recargue la página o realice el envío predeterminado. trim(): Limpia los espacios al inicio y final del valor ingresado por el usuario.

        // Suponiendo que el usuario tuvo un error y el mensaje de error ya fue miostrado, esto eliminará el mensaje.

        errorMessage.text('');


        // Validación. Si heroId no contiene solo números, mostrar una alerta y detener el proceso. Uso aquí expresiones regulares. Esto significa "si la cadena no cumple con el patrón de solo números mostrar el mensaje de error"
        if (!/^\d+$/.test(heroId)) {
            errorMessage.text('Por favor, ingresa un número válido.');
            return;
        }


        // Pasada la validación se puede llamar a la función para realizar la consulta a la API de superhéroes (getHeroData)

        getHeroData(heroId);
    });

    // Función para consultar la API
    function getHeroData(heroId) {
        $.ajax({
            url: `https://www.superheroapi.com/api.php/06a9aafb826aa69d65018b2ce318c1fb/${heroId}`,
            method: 'GET',// Tipo de petición
            success: function (data) { // Funcionalidad si la petición es exitosa
                // Verificar si hay error
                if (data.response === 'error') {
                    alert('Superhéroe no encontrado.');
                } else {
                    // Mostrar la tarjeta con la información
                    displayHeroData(data);
                }
            },
            error: function () {// Si se produce un error en la solicitud AJAX, se ejecutará esta función.
                alert('Hubo un error al consultar la API.');
            }
        });
    }

    // Función para renderizar la información del héroe
    function displayHeroData(hero) {
        // Nombre del superhéroe en el título de la tarjeta
        $('#heroName').text(hero.name);

        // Campos de información del superhéroe
        $('#heroImage').attr('src', hero.image.url).attr('alt', `Imagen de ${hero.name}`);
        $('#heroFullName').text(hero.biography["full-name"]);
        $('#heroConnections').text(hero.connections["group-affiliation, relatives"]);
        $('#heroPublisher').text(hero.biography.publisher);
        $('#heroOccupation').text(hero.work.occupation);
        $('#heroFirstAppearance').text(hero.biography["first-appearance"]);
        $('#heroGender').text(hero.appearance.gender);
        $('#heroWeight').text(hero.appearance.weight[1]);
        $('#heroHeight').text(hero.appearance.height[1]);
        $('#heroEyeColor').text(hero.appearance["eye-color"]);
        $('#heroHairColor').text(hero.appearance["hair-color"]);
        $('#heroRace').text(hero.appearance.race);
        $('#heroAliases').text(hero.biography.aliases.join(', '));
    


    // Mostrar la tarjeta
    $('#heroCard').show();

    // Nota para leer el código: Toma el objeto hero, actualiza el nombre del superhèroe en el elemento con id="heroName", inserta las estadísticas en id="heroInfo" y muestra (show) la tarjeta con id="heroCard".


    // Mostrar el gráfico de torta con CanvasJS
    const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: { text: `Estadísticas de ${hero.name}` },
        data: [{
            type: "pie",
            startAngle: 240, //Establece el ángulo de inicio del gráfico en 240 grados, lo que determina desde dónde comenzará a dibujarse el primer sector.
            indexLabel: "{label} - {y}", //Formato de la etiqueta que se mostrará en cada segmento del gráfico.
            dataPoints: [
                { y: parseInt(hero.powerstats.intelligence), label: "Inteligencia" }, //y: El valor numérico del sector, que se convierte a número entero usando parseInt() porque se espera que los valores provengan de hero.powerstats, que inicialmente son cadenas.
                { y: parseInt(hero.powerstats.strength), label: "Fuerza" },
                { y: parseInt(hero.powerstats.speed), label: "Velocidad" },
                { y: parseInt(hero.powerstats.durability), label: "Durabilidad" },
                { y: parseInt(hero.powerstats.power), label: "Poder" },
                { y: parseInt(hero.powerstats.combat), label: "Combate" }
            ]
        }]
    });
    chart.render(); //Llama al método render() de chart para que se dibuje el gráfico en el contenedor especificado ("chartContainer").
}


});
