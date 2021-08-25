const { differenceInDays, differenceInMonths, addDays } = require('date-fns');
const moment = require('moment');

//Resolver as questões abaixo com o date-fns
//(caso queiram comparar, fazer as mesmas questões utilizando moment)
//1) Obter diferença de dias entre 15/09/2010 e 10/06/2020
let dataIniEx1 = new Date(2010, 08, 15)
let dataFimEx1 = new Date(2020, 05, 10)
let resultadoItem1 = differenceInDays(dataFimEx1, dataIniEx1);
console.log("A diferença de dias é: "+resultadoItem1);

//2) Obter diferença de meses entre 15/09/2011 e 28/06/2021
let dataIniEx2 = new Date(2011, 08, 15)
let dataFimEx2 = new Date(2021, 05, 28)
let resultadoItem2 = differenceInMonths(dataFimEx2, dataIniEx2)
console.log("A diferença de meses é: "+resultadoItem2);

//3) Adicionar 32 dias na data 20/03/2021
let dataEx3 = new Date(2021, 02, 20)
let resultadoItem3 = addDays(dataEx3, 32)
console.log("A data após 32 dias: "+resultadoItem3)



