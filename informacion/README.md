# Proceso de desarrollo

## Inicio

Se presentó el problema, las características, un modelo de la interfaz de usuario a implementar en [Figma](https://www.figma.com/) y unas notas en [Trello](https://www.trello.com/) con ayudas y las tareas a desarrollar.

## Elaboración de página

El proceso más sencillo fue el de implementar la página en HTML.

Originalmente hice la implementación estableciendo valores fijos, pero uno de los requisitos es que fuera una página responsiva responsiva.

## Implementación de encripcatión

Para este proceso consideré dos opciones:

1. [Recorrer la cadena en forma de un array](#recorrer-la-cadena-en-forma-de-un-array)
2. [Recorrer la cadena en forma de un string](#recorrer-la-cadena-en-forma-de-un-string)

### Recorrer la cadena en forma de un array

El primer acercamiento aunque sentí que era más facil, pues el recorrido me pareció más facil, lo descarté porque no encontré manera de insertar elementos en el array sin modificar el resto y en JavaScript(JS) no existen listas, que harían el proceso más facil.

Para la cadena:

> hola

El array es:

> h o l a

| Letra | Posicion |
|-|-|
| h | 0 |
| o | 1 |
| l | 2 |
| a | 3 |

**Es facil encontrar la posicion de las vocales, pero no se puede introducir una cadena en dichas posiciones**

---

### Recorrer la cadena en forma de un string

El segundo aunque no me convencía tanto me di cuenta que si podía hacer una concatenación facilmente.

Para esto dividí la cadena en dos y en concatené la cadena en el lugar de la vocal.

Para sustutir la primera vocal de la siguiente cadena:

> hola

La primera mitad de la cadena es:

> h

La segunda mitad de la cadena es:

> la

Y la cadena que se sustituye es:

> ober

Entonces se realiza la siguiente concatenación: 

> (primeraMitad + cadenaCifrado) + segundamMitad

## Implementación de desencriptación

Sabía que JS tenía soporte para las expreciones regulares, por lo que pensé que esta manera era mucho más sencillo buscar y sustituir las cadenas especificas por las vocales usando expresiones regulares.

Los strings en JS tiene la función `replace()` que recibe una expresión regular y la cadena por la cual sustituir. Realicé este reemplazo una vez por cada vocal.

## (Extra) Implementación de botón copiar

Se requería también la implementación de un botón que copiara el resultado de la encriptación o desencriptación al portapapeles.

En la ayuda que se dio, se menciona que JS está deprecando el método `document.execComand` al método `navigator.clipboard`

Una vez sabiendo esto, solo queda llamar al método `writeText` y pasarle el texto.
