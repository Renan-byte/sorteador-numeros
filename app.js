function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero = obtrNumeroAleatorio(de, ate)
    alert(numero)

function obtrNumeroAleatorio(min, max){
return Math.random() * (max - min) + min;
}