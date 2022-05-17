# Prueba técnica

## Scripts

### `npm start`

Se iniciará en modo desarrollo en [http://localhost:3000](http://localhost:3000)

### `npm test`

Inicia los test implementados en modo interactivo

### `npm run build`

Produce la app a una carpeta 'build'

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Razonamiento

En el proyecto se han implementado las soluciones requeridas:

### Header con animación

Para el header se ha conseguido que al hacer scroll down, se oculte desplazándose hacia arriba y desapareciendo pero al hacer scroll up vuelve a aparecer para una fácil navegación por las distintas páginas.
Además, se ha implementado el uso de una letra más llamativa (blanco más grueso) para el link a la página actualmente activa para un más fácil reconocimiento visual de dónde nos encontramos.
Simplemente se ha modificado algo la estructura del componente responsable y usado los estilos existentes para mantener una homogeneidad visual.

Para mejorar, podría implementar una forma diferente de visualizar el header en pantallas más pequeñas basado en el tamaño del viewport, pero he dedidido no hacerlo basado en el enunciado de la prueba.

### Header con navegación a distintas rutas

En el header se ha implementado la capacidad de, al hacer click en cada link, nos lleva a una ruta diferente que se muestra en la url.
Para esto he usado React-Router, el cual permite además redireccionar cualquier página que no esté estrictamente contemplada a `/all-meetups` para mejor y más fácil uso.

### Añadir favoritos

Se ha implementado la funcionalidad de añadir a favoritos, el cual permite al hacer click en el botón de una meetup, añadir a la lista de favoritos.
Los favoritos seleccionados se muestran en la página de favoritos y el número de estos meetups se muestra siempre de forma dinámica en el header.
Además, si un meetup está ya seleccionado como favorito, el botón contiene un texto diferente y al pulsarlo, se elimina de favoritos.

También he implementado guardar en localStorage los favoritos para que persistan entre sesiones con un máximo de tiempo de 60 min, tras el cual, caducará y se reseteará.

Para la implementación de la lógica se ha optado por usar Redux creando una store y un slice para favoritos con su respectiva funcionalidad simplemente para mostrar su uso aunque se podría haber usado useContext con un useReducer.
Sin embargo, para el formulario de crear un nuevo meetup, he optado por usar UseState, ya que es más sencillo y para mostrar una tecnología diferente y mi capacidad para usarla.

### Tests

He optado por realizar diversos tests unitarios de varios componentes para comprobar que renderizan correctamente y la funionalidad es la deseada.
He implementado un test para el useFetch hook haciendo un mock al fetch de los datos con react-query, comprobando que efectivamente, funciona tal y como se espera.
Al no disponer de mucho tiempo, no he desarrollado mucho más allá, pero podrían realizarse tests más en profundidad y estudiar casos peculiares con más detenimiento.

### Otros

He implementado la lógica para crear un nuevo meetup desde la página correspondiente, la cual hace un POST request a un mock api que he creado para este proyecto.
También los datos son obtenidos de dicho mock api para mostrar la fácil implementación de cualquier servidor usando el custom hook `useFetch`.
