// dados da pessoa
const name = "Allan";
const surname = "Bruno";
const age = 17;
const weight = 58; //Kg
const height = 1.72; //M
// calcular o imc
let imc = weight / (height * height);
//imc= índice de Massa Corporal; ENG= BMI: Body Mass Index

// achar o ano de nascimento
let yearOfBirth = 2022 - age;
// resultado final
console.log(
  `${name} tem ${age} anos, pesa ${weight}Kg. Ele tem ${height} metros de altura e seu IMC é de ${imc}, além disso ele nasceu no ano de ${yearOfBirth}`
);
