var operacion = '';
var n1 = '';
var n2 = '';
function principal() {
  var sumar = document.getElementById('sumar');
  var restar = document.getElementById('restar');
  var multiplicar = document.getElementById('multiplicar');
  var dividir = document.getElementById('dividir');
  var igual = document.getElementById('igual');
  var borrar = document.getElementById('borrar');
  var numeros = document.querySelectorAll('button.numeros');

  numeros.forEach(function (numero) {
    numero.addEventListener('click', function () {
      var numeroClickeado = this.value;
      mostrarNumero(numeroClickeado);
    });
  });
  sumar.addEventListener('click', function () {
    operacion = 'sumar';
    n1 = ObtValor();
    limpiar();
  });

  restar.addEventListener('click', function () {
    operacion = 'restar';
    n1 = ObtValor();
    limpiar();
  });

  multiplicar.addEventListener('click', function () {
    operacion = 'multiplicar';
    n1 = ObtValor();
    limpiar();
  });

  dividir.addEventListener('click', function () {
    operacion = 'dividir';
    n1 = ObtValor();
    limpiar();
  });

  igual.addEventListener('click', function () {
    operar();
    console.log
  });

  borrar.addEventListener('click', function () {
    limpiar();
  });

  function mostrarNumero(numero) {
    var display = document.getElementById('mostrar');
    display.value += numero;
  }
}

function ObtValor() {
  var display = document.getElementById('mostrar');
  return display.value;
}

function limpiar() {
  var display = document.getElementById('mostrar');
  display.value = '';
}

function operar() {
  var display = document.getElementById('mostrar');
  var total;

  // Convertir los valores a números
  var num1 = parseFloat(n1);
  var num2 = parseFloat(ObtValor());

  switch (operacion) {
    case 'sumar':
      total = num1 + num2;
      break;
    case 'restar':
      total = num1 - num2;
      break;
    case 'multiplicar':
      total = num1 * num2;
      break;
    case 'dividir':
      total = num1 / num2;
      break;
    default:
      total = '';
      break;
  }
  // Mostrar el resultado en el campo de entrada
  display.value = total !== '' ? total.toString() : '';


  // Reiniciar las variables para futuras operaciones
  n1 = total.toString();
  operacion = '';
  console.log
}

principal();
