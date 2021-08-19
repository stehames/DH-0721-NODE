var formatDistanceStrict = require('date-fns/formatDistanceStrict')
var add = require('date-fns/add')
var format = require('date-fns/format')

var result = formatDistanceStrict(
    new Date(2010, 8, 15),
    new Date(2020, 5, 10),
    { unit: 'day' }
  )


console.log("A diferença em dias é: "+result);

var result2 = formatDistanceStrict(
    new Date(2011, 8, 15),
    new Date(2021, 5, 28),
    { unit: 'month' }
  )
console.log("A difereça em meses é: "+result2);

const soma = add(new Date(2021, 2, 20), {
    
    days: 32,
    
  })
  
console.log("Adicionando 32 dias a data fica: "+format(new Date(soma), "yyyy/MM/dd"));