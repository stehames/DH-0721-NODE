let catalogo = require('./database/catalogo.json')


function listarTodosOsFilmes(catalogo){
    for(let i=0; i<catalogo.length; i++){
        console.log(catalogo[i])
    }
}

function listarFilmesEmCartaz(catalogo){
    for(let i=0; i<catalogo.length; i++){
        if(catalogo[i].emCartaz){
            console.log(catalogo[i])
        }
    }
}

function alterarStatusEmCartaz(catalogo){
    for(let i=0; i<catalogo.length; i++){
        catalogo[i].emCartaz ? catalogo[i].emCartaz = false : catalogo[i].emCartaz = true
        console.log(catalogo[i])    
    }
        
}

listarTodosOsFilmes(catalogo)
listarFilmesEmCartaz(catalogo)
alterarStatusEmCartaz(catalogo)