/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
//function that evaluate the value and returns result
document.getElementById("output").style.visibility = "hidden";
document.getElementById("kgInput").addEventListener("input", function (e) {
  document.getElementById("output").style.visibility = "visible";
  let kg = e.target.value;
  document.getElementById("lbOutput").innerHTML = kg * 2.2046;
  document.getElementById("gramsOutput").innerHTML = kg / 0.001;
  document.getElementById("ozOutput").innerHTML = kg * 35.274;
});
