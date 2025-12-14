## Identificación: 
- Valeria Castro Comte
- Andrés Vergara Silva

## DESARROLLO FRONTEND "Gestores - ProREP": 

## Tecnologías:
- HTML 5
- CSS
- BOOTSTRAP 
- JAVASCRIPT
- FONTAWESOME
- GIT

## Uso de DOM NATIVO:
Tarjetas construidas con Javascript mediante el uso de DOM Nativo (`createElement`, `appendChild`),
integrando los datos sin utilizar html estático.


 ## Acceso y uso:
- Etiquetas semánticas: `main`/ `section`/ `article`/ `header`/ `footer`.
- Atributos ARIA (`aria-label`, `aria-live`)
- Navegación mediante teclado: TAB para navegar en tarjetas 
(card.setAttribute("tabindex", "0"))
- Contraste de colores favorece la visibilidad


## Buenas prácticas aplicadas

1- Nombres de funciones descriptivas (BadgeTipo / CardEmpresa / renderizarGestores/ cargarDatosDesdeApi)

2- Separación entre:
    Lógica (JS: datos, procesos y renderizado) 
    Presentación Visual (HTML, CSS Y BOOTSTRAP)

3- Componentes reutilizables (funciones en JS que permiten utilizarse varias veces para no repetir código)

4- Uso correcto de `const` y `let`
    const: valores que no se reasignan
    let: valores que cambian

5- Manejo de errores (`try/catch`) para evitar que la app se rompa cuando el backend no responde, el json tiene errores o hay ausencia de datos.

6- Organización de archivos por responsabilidad (la organización permite que sea fácil de comprender para todos los que visualicen el código)

7- Código comentado (reseña de lo que es y para que sirve, buena práctica para entender el código)

8- Evitar duplicación de código (Fácil de leer, menos errores, modificaciones en un solo lugar)

9- Uso de DOM nativo (el contenido se genera dinámicamente)

10- El control de versiones con Git sirve para:
    - Guardar cambios
    - Controlar el versionamiento
    - Volver atrás
    - Mantener el proyecto ordenado


## Control de versiones
Con Git se pueden controlar los avances del proyecto ordenándolos en diferentes versionamientos. A través de los commits, se pueden guardar los cambios significativos que se van produciendo durante el desarrollo del proyecto para mantenerlos ordenados para su fácil acceso y comprensión.
Para controlar nuestras versiones utilizamos git, con un repositorio remoto en github.

