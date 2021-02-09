function agregador(texto) {
    let arrayTexto = texto
        .replace(/(~|`|!|@|#|$|%|^|&|\*|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\/|\\|\||-|_|\+|=)/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase().split(' ').sort()
    let resultado = arrayTexto.reduce((result,palavra) => {
        result[palavra] = result[palavra] || []
        result[palavra].push(palavra);
        return result 

    },{})
    return Object.values(resultado) //Por algum motivo retorna como objeto, essa função serve para transformar em array
}
const enviar = document.querySelector("[enviar]");
const areaTexto = document.querySelector("[resultado]")
enviar.addEventListener('click', function(){
    areaTexto.innerHTML = ""
    let texto = document.querySelector('[texto-input]').value
    let textoAgregado = agregador(texto);
    textoAgregado.map(function(linha){
        areaTexto.innerHTML = areaTexto.innerHTML && (areaTexto.innerHTML += "<br>")
        return linha.map(function(celula){
            areaTexto.innerHTML += " " + celula;
        })
    })
})