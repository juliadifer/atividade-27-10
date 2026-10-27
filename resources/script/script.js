//let body = document.querySelector("body")
//let div = document.querySelector("div")
//body.removeChild(div)

//let body = document.querySelector("body");
//let h1 = document.querySelector("h1");
//body.removeChild(h1);
//let h1 = document.querySelector("#trocarCor")

//h1.style.color = "pink"
//h1.style.background = "grey"
//h1.style.height = "40px"

//SEMPRE QUE QUISER ALTERAR OU SABER UM VALOR DO CSS OU UM ELEMENTO HRML
//nomeDaTag.style.attribute

//let body = document.querySelector("body")
//body.style.background = "lightgreen"

//Çet p = document.querySelector("p")
//p.style.color = "pink"

//let div = document.querySelector("div")
//div.style.color = "pink"

//var h1 = document.querySelector("h1");
//var paragrafo = document.querySelector("p");

//paragrafo.innerText = innerText;

//function verificar(cor) {
//if (cor == "Blue" || cor == "Red" || cor == "Yellow")
    //return "Cor primaria escolhida"
//else
    //return "Cor secundaria escolhida"
//}

//let cor = prompt("Escolha uma cor:")
//document.body.style.background = cor
//alert(verificar(cor))

let h1 = document.querySelector("h1");
let button = document.querySelector("button")

button.addEventListener("click", function() {
    console.log("Cliquei")
    document.body.style.background = "lightyellow"
    h1.style.color = "pink"
})
