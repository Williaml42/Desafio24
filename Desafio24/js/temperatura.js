var agora   = new Date();
var ano     = agora.getFullYear();

function atualizaAnoRodape() {
 
  var anoRodape = document.querySelector('span.ano');
 
  anoRodape.innerText = ano;
}

function converteTemperatura() {
  var temperatura = document.getElementById('temperatura');
  var simbolo = document.getElementById('simbolo');
  var res = document.getElementById('convertido');

  temperatura = Number(temperatura.value);

  if (simbolo[0].selected) {
    
    var fahrenheit = (temperatura * 9/5) + 32;
    var kelvin = temperatura + 273.15;

    res.innerHTML = `<p><strong>${temperatura} °C</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${fahrenheit.toFixed(2)} °F</strong> (Fahrenheit)</p>`;
    res.innerHTML += `<p><strong>${kelvin.toFixed(2)} K</strong> (Kelvin)</p>`;

  } else if (simbolo[1].selected) {
    
    var celsius = (temperatura - 32) * 5/9;
    var kelvin = (temperatura - 32) * 5/9 + 273.15;

    res.innerHTML = `<p><strong>${temperatura} °F</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${celsius.toFixed(2)} °C</strong> (Celsius)</p>`;
    res.innerHTML += `<p><strong>${kelvin.toFixed(2)} K</strong> (Kelvin)</p>`;

  } else if (simbolo[2].selected) {
    
    var celsius = temperatura - 273.15;
    var fahrenheit = (temperatura - 273.15) * 9/5 + 32;

    res.innerHTML = `<p><strong>${temperatura} K</strong> equivalem a:</p>`;
    res.innerHTML += `<p><strong>${celsius.toFixed(2)} °C</strong> (Celsius)</p>`;
    res.innerHTML += `<p><strong>${fahrenheit.toFixed(2)} °F</strong> (Fahrenheit)</p>`;
  }
}