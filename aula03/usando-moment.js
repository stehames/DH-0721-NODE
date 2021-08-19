let moment = require('moment');

var now = moment();

var a = moment("09, 15, 2010", 'MM-DD-YYYY');
var b = moment('06, 10, 2020','MM-DD-YYYY');
console.log("Diferença em dias é: "+b.diff(a, 'days'));

var c = moment('09, 15, 2011','MM-DD-YYYY');
var d = moment('06, 28, 2021','MM-DD-YYYY');
console.log("Diferença em meses é de: "+d.diff(c, 'months'));

var date = moment('03, 20, 2021','MM-DD-YYYY');
console.log("Adicionando 32 dias a data anterior fica: ");
console.log(date.add(32, 'days').format("MM-DD-YYYY"));