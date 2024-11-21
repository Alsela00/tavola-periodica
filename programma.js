

for (const element of elementi) {let contenitore = document.getElementById('contenitore');
    contenitore.style.position = "relative"
    
    let elemento = document.createElement('div');
    elemento.style.borderStyle = 'solid';
   elemento.style.height = "120px";
    elemento.style.width = '100px';
    elemento.style.textAlign = 'center';
    elemento.style.position = "absolute";
    elemento.style.left = 100 * (element.xpos - 1) + "px";
elemento.style.top = 120* (element.ypos - 1) + "px";
elemento.style.backgroundColor = "#" + element["cpk-hex"];
elemento.style.boxSizing = "border-box";
elemento.style.borderWidth = "0.5px"
elemento.addEventListener("click", () => {
   let immaginescheda = document.getElementById("immagine-scheda");
   immaginescheda.src = element.image.url;
immaginescheda.style.borderStyle = "solid";
immaginescheda.style.borderColor = "#" + element["cpk-hex"]
   
   let titoloscheda = document.getElementById("titolo-scheda");
   titoloscheda.innerText = element.name;
   let descrizioneScheda =document.getElementById("descrizione-scheda")
   descrizioneScheda.innerText = element.summary;
   let categoriascheda = document.getElementById("categoria-scheda");
   categoriascheda.innerText = "category:" + element.category;
   let densita = document.getElementById("densita")
   densita.innerText ="density : " + element.density 

}); 






    let numeroAtomico = document.createElement('p');
    numeroAtomico.innerText = element.number;
    elemento.appendChild(numeroAtomico);
    numeroAtomico.style.textAlign = "left"
    
    let simbolo = document.createElement('a');
    simbolo.innerText = element.symbol
    simbolo.href= element.source
    simbolo.style.fontSize = '25px'
    elemento.appendChild(simbolo);
    simbolo.style.textDecoration = "none" 
    simbolo.style.fontWeight = "bold"


    let nome = document.createElement('p');
    nome.innerText = element.name ;
    elemento.appendChild(nome);
    
    contenitore.appendChild(elemento);
    
}





