# SuperHero API Project

Este proyecto permite a los usuarios buscar información sobre superhéroes utilizando la SuperHero API. La información obtenida se presenta en una tarjeta con detalles del superhéroe, incluyendo una imagen y un gráfico de torta que muestra las estadísticas de poder del héroe.

## Tecnologías Utilizadas

- **HTML**: Para la estructura básica de la página web.
- **CSS (Bootstrap)**: Para el diseño y la disposición de los elementos en la página.
- **JavaScript (jQuery)**: Para la manipulación del DOM, manejo de eventos y llamadas AJAX a la API.
- **CanvasJS**: Para la creación del gráfico de torta que muestra las estadísticas del superhéroe.

## Estructura del Proyecto

### HTML

El archivo HTML se encarga de la estructura y el diseño básico de la página. Contiene una barra de navegación, un formulario de búsqueda, y una tarjeta que se muestra con la información del superhéroe cuando se realiza una búsqueda exitosa.

### JavaScript

El archivo JavaScript maneja la lógica principal de la aplicación, incluyendo la captura de eventos del formulario, validación de entradas, llamadas AJAX a la SuperHero API y la renderización de la tarjeta y el gráfico.

## Cómo Funciona

1. **Formulario de Búsqueda**: El usuario ingresa un número de ID en el formulario y presiona "Buscar". El número debe estar entre 1 y 732.

2. **Validación**: Se valida que el ID ingresado sea un número. Si no lo es, se muestra un mensaje de error.

3. **Consulta a la API**: Si la validación es exitosa, se realiza una llamada AJAX a la SuperHero API utilizando el ID proporcionado.

4. **Visualización de Resultados**: Si se encuentra un superhéroe con el ID dado, se muestra una tarjeta con su información, incluyendo nombre, imagen, y otras características. Además, se muestra un gráfico de torta con sus estadísticas de poder.

## Conclusión

Este proyecto es una implementación sencilla para buscar y mostrar información de superhéroes utilizando la SuperHero API. La integración de tecnologías como Bootstrap para el diseño y CanvasJS para la visualización de datos hace que la aplicación sea visualmente atractiva y fácil de usar.
