alert("Bienveidos a mi replica de trello :)");
/*se crea addList para generar una Tablero*/
var addList = document.getElementById('addList');

addList.addEventListener('click', function() {
  /*se llama a los elementos que contendrá nuestro tablero*/
  document.getElementById('boxList').className = 'addOff';
  document.getElementById('container').className = 'listOn';
  document.getElementById('list').focus();

})

/*aqui iran los elementos de las listas creadas*/

var button = document.getElementById('button');

button.addEventListener('click', function() {
  /*seccion que contendrá la primera*/
  var newSection = document.createElement('section');
  newSection.className = 'inline listOn'
  /*titulo de la tarjeta*/
  var newTitle = document.createElement('span');
  var titleDiv = document.createElement('div');
  titleDiv.appendChild(newTitle);
  titleDiv.className = 'title';
  /* se añadiran nuevas tarjetas*/
  var newlink = document.createElement('a');
  newlink.setAttribute('href', '#');
  newlink.innerHTML = 'Añadir una Tarjeta';
  /*contenedor del texto de las tareas*/
  var divTarjetas = document.createElement('div');
  divTarjetas.className = 'contenedor';

  /*divisor entre secciones*/
  var divLink = document.createElement('div');
  divLink.appendChild(newlink);
  divLink.className = 'link';
  /*área donde se crean las nuevas listas*/
  var newTextA = document.createTextNode(document.getElementById('list').value);
  document.getElementById('list').value = "";
  newTitle.appendChild(newTextA);
  /*área donde se escribirán las nuevas tarjetas*/
  var textArea = document.createElement('textArea');
  textArea.className = 'textAreaOff';

  var divArea = document.createElement('div');
  divArea.appendChild(textArea);

  var newButton = document.createElement('button');
  newButton.innerHTML = 'Guardar';
  newButton.className = 'buttonOff';
  /*boton para guaradar tareas*/
  var divButton= document.createElement('div');
  divButton.appendChild(newButton);

  /*se puede crear una nueva lista*/
  newlink.addEventListener('click', function() {
  newlink.className = 'newLinkTarjetaOff';
  textArea.className = 'areaText';
  newButton.className = 'bttn';
  textArea.focus();
  })


  newButton.addEventListener('click', function() {

    var text = document.createElement('p');
    var nameListText = textArea.value;
    var newListText = document.createTextNode(nameListText);
    text.appendChild(newListText);
    divTarjetas.appendChild(text);
    textArea.value = "";
    textArea.focus();

  })


  var boxbttn = document.createElement('div');
  boxbttn.appendChild(divArea);
  boxbttn.appendChild(divButton);
  boxbttn.className = 'principal';

  /*hijos de newSection*/

  newSection.appendChild(titleDiv);
  newSection.appendChild(divLink);
  newSection.appendChild(divTarjetas);
  newSection.appendChild(boxbttn);


  formBox = document.getElementById("formBox");
  principal.insertBefore(newSection, formBox);


})
var trash = document.getElementById('trash');
trash.addEventListener('click', function() {
  container.remove(listOff);
  });
