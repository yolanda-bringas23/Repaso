const titulo = document.querySelector(".claseTitulo");
console.log(titulo);


const insert = document.createElement("h2");
//insert.setAttribute("type","text"); 
insert.textContent = "Habilidades";
document.body.appendChild (insert); 


/*const habilidades1 = {
    Proactivo: "si",
    Puntual: "si",
    Conocimientos: "Programador junior",
};*/

const insert1 = document.createElement("h3");
insert1.textContent = "Conocimientos: Programador Junior";
document.body.appendChild(insert1);

const insert2 = document.createElement("h3");
insert2.textContent = "Proactivo";
document.body.appendChild(insert2);

const insert3 = document.createElement("h3");
insert3.textContent = "Puntual";
document.body.appendChild(insert3);

