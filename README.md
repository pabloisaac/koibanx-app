# Koibanx App

## Instalacion local del proyecto

```sh
run> git clone https://github.com/pabloisaac/koibanx-app.git
cd koibanx-app
run> npm install o npm i
```

## Ejecución del Proyecto

```sh
npm start
```


## Consideraciones
En el punto 1 d) mencionan que la segunda fila muestra el tipo de dato de cada columna, lo que yo considero es que es una aclaracion del tipo de dato y no que siempre la tabla tiene como data en la segunda fila el tipo de dato y luego desde la tercer fila la información que brinda el backend. Por lo tanto, la tabla tiene la primer fila, como cabecera de cada columna el nombre de cada campo y luego la tabla es cargada con la información obtenida del backend, quien manda la información con el formato que se muestra en la segunda fila, (string, string, string, number, number, etc...) <br />
En el punto 1 j) mencionan que la tabla siempre recibe de la api el siguiente JSON:<br />
{
  "data_to_show": int,
  "rows_total": int,
  "rows_per_page": int,
  "sort": array
}
<br />
Yo considero que la key <b>Sort</b> tiene un value array con el siguiente formato [atributo, orden], Ejemplo: ["id", "asc"] por lo tanto la tabla es ordenada al cargar la data por ID de forma Ascendente dado que no tengo formas de saber como realmente como lo trae el backend <br />
Dado que el backend no existe, yo simulo que el request me devuelve un JSON Mock con la misma data y estructura que devuelve la api<br />

Consideo que puedo utilizar Regex como brinda el servicio RestDB para armar una unica query dinamica, de tal forma que si deseo buscar por uno o muchos campos, la query se adapta a los filtros de busqueda y realiza la busqueda utilizando regex por cada campo que desea buscar.<br />
Dado que el JSON Mock es unicamente para simular data para la tabla, no soporta ningun tipo de busqueda sobre esta data<br />
Otro dato para aclarar es que con solo cambiar el endpoint en el servicio http y este apunte a un backend que utilice el servicio de RestDB, la funcionalidad de ambos componentes no se le debera aplicar ningun cambio, estos van a seguir funcionando con normalidad y habilitando el uso de filtro de busquedas con query<br />
<br />