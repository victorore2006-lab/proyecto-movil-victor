\# Semana 3 - Investigación



\## A1. Flexbox



\### 1.

En React Native, flexDirection usa `column` por defecto.  

En CSS web normalmente el valor por defecto es `row`.  

Por eso en React Native los elementos suelen colocarse uno debajo de otro.



\### 2.

`justifyContent` organiza los elementos sobre el eje principal.  

`alignItems` los organiza sobre el eje secundario.  

Con `column`, justifyContent actúa verticalmente y alignItems horizontalmente.  

Con `row`, justifyContent actúa horizontalmente y alignItems verticalmente.



\### 3.

Algunos valores de justifyContent son:



\- `flex-start`: coloca los elementos al inicio.

\- `center`: coloca los elementos en el centro.

\- `flex-end`: coloca los elementos al final.

\- `space-between`: deja espacio entre los elementos.

\- `space-around`: deja espacio alrededor de cada elemento.



\### 4.

`flex: 1` hace que un componente ocupe el espacio disponible.  

Si dos componentes tienen `flex: 1` y `flex: 2`, el segundo ocupa aproximadamente el doble de espacio que el primero.



\## A2. Estilos de View



\### 5.

`padding` agrega espacio dentro del componente entre el contenido y su borde.  

`margin` agrega espacio fuera del componente.  

`paddingHorizontal` aplica espacio a izquierda y derecha.  

`marginVertical` aplica espacio arriba y abajo.



\### 6.

Para crear bordes se pueden usar:



\- `borderWidth`

\- `borderColor`

\- `borderRadius`



`borderRadius` sirve para redondear las esquinas.



\## A3. Estilos de Text



\### 7.

`fontSize` cambia el tamaño del texto.  

`fontWeight` cambia el grosor de la letra y recibe valores de texto como `"bold"` o `"700"`.  

`color` cambia el color.  

`textAlign` cambia la alineación.  

`lineHeight` controla la separación vertical de las líneas.  

`letterSpacing` cambia el espacio entre letras.



\### 8.

`textTransform` permite cambiar el texto a mayúsculas, minúsculas o capitalizado.  

Ejemplo: `textTransform: 'uppercase'`.



`textDecorationLine` permite agregar decoraciones como subrayado.  

Ejemplo: `textDecorationLine: 'underline'`.



\### 9.

Un `Text` dentro de otro `Text` puede heredar estilos de texto.  

Un `Text` dentro de un `View` no hereda automáticamente propiedades como color o fontSize porque View y Text manejan estilos diferentes.



\## A4. StyleSheet



\### 10.

`StyleSheet.create` permite organizar los estilos en un solo lugar y mantener el código más limpio.  

También ayuda a reutilizar estilos y facilita encontrar errores.



\### 11.

En un arreglo de estilos como:



`style={\[estilos.tarjeta, estilos.tarjetaDestacada]}`



si los dos estilos tienen `backgroundColor`, gana el último estilo del arreglo.  

En este caso gana `tarjetaDestacada`.

