let catalogo = [
    {
        codigo: 1,
        titulo: "Lágrimas do Sol",
        duracao: 1.2,
        atores: ["Fernando", "João", "Bianca"],
        anoDeLancamento: 2017,
        emCartaz: true
    },
    {
        codigo: 2,
        titulo: "Homens de Preto",
        duracao: 1.4,
        atores: ["Will", "José", "Cristina"],
        anoDeLancamento: 2017,
        emCartaz: false
    }
]

function adicionarFilme(codigo, titulo, duracao, atores, 
    anoDeLancamento, emCartaz){
    catalogo.push({codigo, titulo, duracao, atores,
        anoDeLancamento, emCartaz})
    return catalogo;
}

function buscarFilme(codigo){    
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo == codigo){
            return catalogo[i];         
        } 
    } 
}

function alterarStatusEmCartaz(codigo){
    for(var i = 0; i < catalogo.length; i++){
        if(catalogo[i].codigo == codigo){
            if(catalogo[i].emCartaz == false){
                catalogo[i].emCartaz = true
                return catalogo[i];
            }else{
                catalogo[i].emCartaz = false
                return catalogo[i];
            } 
        }
    }
}

console.log(adicionarFilme(3, "Avatar", 2, ["José", "João"], 2015, false))

//console.log(buscarFilme(1))
// console.log(alterarStatusEmCartaz(1))

