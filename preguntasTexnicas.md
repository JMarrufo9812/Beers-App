# UX Y UI
- Al intuir por la informacion que la api proporcionaba es para mostrar informacion muy detallada de las cervezas pense en un menu de catadores o algo por el estilo busque un diseño para tener una base sobre, los colores y la estructura de deberia de utilizar eb este caso elegi unas cards con imagen e informacion

# Estructura
utilice varios principios de solid para armar la estructura y componentes de la aplicacion como:

- principio de responsabilidad unica (componentes que solo tiene una razon para cambiar)
  los componenentes de header y de beers son ejemplos de este principio ya que estan separados en la vista y cada uno cambnia su informacion por separado

- Principio abierto-cerrado (componenete abiertos a la extencion)
  el componente de beers es un componente que solo recibe un slot al igual que el header lo cual permite que se cambie solo cuando se desee cambiar el modo de visualizacion.
  un ejemplo mas a detalle es el componenete beers en el caso de esta app se uso un card que muestra toda la informacion de las cerveza sin embargo si quisieramos cambiar este modo de visualizacion por una tabla o una vista solo cambiariamos lo que se pasa mediante el slot lo cual lo hace mas flexible.
  Otro ejemplo de como aplicar este principio sin slots es el ejemplo de el archivo de input este archivo funciona con completo dinamismo este componente podria ser cualquier cosa en esete caso aplicado a los inputs puede ser cualquier tipo de input use dos ejemplos los cuales son el caso de inputText e inputSelect pero podria crecer mas y utilizar otros tipos de campos y simplemente con llamar al componenete input un ejemplo de el alxance de esto es por ejemplo formulario dinamicos si tuvieramos un array de objetos que contenieran la configuracion de los inputs podriamos iterarlo con este componenente y pasarle por props la configuracion y todos los campos se renderizarian independientemente del tipo y configuracion

- Principio de sustitución de Liskov
  existe un archivo base de la api el cual se encarga de dos cosas la primera es de contener la url base de la api y la segunda de tener los metodos sin embargo esta funcion no hace nada hasta que es llamada y recibe como parametro una url que indicaara hacia donde se hara la peticion de tal froma que si se requiriera cambiar la api solo tendriamos que sustituir el archivo base incluso si quisieramos cambiar de libreria la configuracion solo se haria desde aqui y no en todas las funciones donde hacemos peticiones

# ¿porque no use vue router?
- Por fines practicos y al ser una sola vista no vi la necesidad de utlizarlo sin embargo si la app requiriera de mas vistas separaria las vistas en una carpeta con su respectivo nombre y cada vista cargaria los componenetes que fueran necesarios y la app cambiaria a tener una estrucutra asi
app > router > views > componenets


● ¿Has aplicado los principios SOLID?
- si la respuesta de como lo he echo esta en el codigo y en la explicacion de arriba

● ¿Cuánto tiempo has estado pensando y escribiendo tests del código? Si
hubieras tenido mucho más tiempo... ¿qué habrías añadido? Si no has
realizado tests, ¿qué herramientas habrías utilizado para llevarlos a cabo?
- dos herramientas que podrian ayudar mucho es vue test utils o jest 

● ¿Cómo mejorarías la API que has usado?
- en la respuesta deberia de tener un contador de el maximos de elementos encontrados ya que al hacer
  una busqueda solo trae los elementos que coinciden pèro no se puede saber cuantos son en total asi que no es posible paginar la busqueda, tambien esto afecta al paginado ya que no se sabe si hay mas elementos para poder seguir a la siguiente pagina

● ¿Crees que esta API soporta peticiones CORS? ¿Cómo has llegado a esa
conclusión?
- si, la documentacion lo especifica

●¿Cómo rastrearías un problema de rendimiento en producción? ¿Alguna
vez has tenido que hacerlo?
- monitorearia el tiempo de respuesta de cada archivo que se carga y el numero de peticiones que se hacen
- si en algun momento me vi en la necesidad de checar el performace de una app que tardaba mucho en responder monitorie el numero de peticiones que se hacian al servidor y me di cuenta que era eso que la relentisaba habian peticiones que se hacian doble porque alguna funcion hacia que si hiciera dos veces o hasta 4 la solucion fue refactorizar el codigo ya que se hacian las peticiones muchas veces en diferentes funciones la unifique en una sola funcion y sustituti todas las peticiones por la nueva funcion que cree y le pase un parametro para saber de donde venian y asi detecte de donde venian las peticiones extras


● Descríbete a ti mismo en formato JSON.
 {
     "name": "josias eliel marrufo chable",
     "age": "24",
     "experienceYears": "+3",
     "nacionality" "mexicana",
     "skills": "js, html, css, vuejs, reactjs, nodej,"
     "maritalStatus": "casado",
     "hobbies": "modelado en 3D, leer, jugar videojuegos" 
 }
