const number = Number(prompt("Type a number"));
const titleNumber = document.getElementById("number");
const text = document.getElementById("text");

titleNumber.innerHTML = number;

text.innerHTML = `<p>A raiz quadrada desse número é: ${number ** 0.5}</p><br />
<p>${number} é um inteiro?:${Number.isInteger(number)}</p><br />
<p>${number} é um NaN?: ${Number.isNaN(number)}</p><br />
<p>${number} arrendondado para baixo é: ${Math.floor(number)}</p><br />
<p>${number} arrendondado para cima é: ${Math.ceil(number)}</p><br />
<p>${number} com duas casas decimais é: ${number.toFixed(2)}</p><br />`;
