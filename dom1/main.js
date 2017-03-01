//document.write('Hola javascript')
var cajas=document.getElementsByTagNameNS('div')
cajas[0].textContent='Hola Mundo'
cajas[1].innerHTML='<b>Hola JavaScript</b>'
var cajas=document.getElementById('primera')

cajas.textContent='Primera Caja'

//No se recomienda agregar elementos con el metodo write()
//documento.write <'div class="caja">Nuevo elemento </div'>

//5 pasos para agregar un nuevo elemento al DOM

//Paso 1.Crear el nuevo elemento (createelement())
var elementoNuevo=document.createElement('div')

//Paso 2.Crear el contenido (createTextNode())
var nodoContenido=document.createTextNode('Nuevo Elemento')

//Paso 3. Añadir el contenido al elemento (appendChild())
elementoNuevo.appendChild(nodoContenido)

//Paso 4.Agregar atributos al elemento (setAtribute())
elementoNuevo.setAttribute('class','roja')
//Paso 5.Crear el contenido (createTextNode())

//Agrega el nuevo elemento al final del documento
//var contenedor=document.getElementById('contenedor')
//contenedor.appendChild(elementoNuevo)
//document.appendChild(elementoNuevo)

//elementoNuevo.createTextNode(elementoNuevo)

//Agrega el contenido del elemento al inicio del documento 
var contenedor=document.getElementById('contenedor')
var primera=document.getElementById('primera')
contenedor.insertBefore(elementoNuevo,primera)

//Eliminar la caja con el Id='tercera'

var tercera=document.getElementById('tercera')
contenedor.removeChild(tercera)
