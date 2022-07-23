/*

let xhttp = new XMLHttpRequest(); //instancia del objeto XMLHttpRequest

xhttp.onreadystatechange = function() {                 //
    if (this.readyState == 4 && this.status == 200) {   //
        let response = JSON.parse(xhttp.responseText)   // cachamos que el resultado sea correcto y 
        console.log(response)                           //  podamos estraer la Data
  }                                                     //
}                                                       //
xhttp.open("POST", "https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/Prueba/productos.json", true); // configuracion para abrir la peticion
  
xhttp.send( JSON.stringify(product));   // el envio de la peticion
*/

// peticion con JQuery

/* const getData = () => {
    $.ajax({
        method:"GET", // || "POST" || "PATCH" || "DELETE" || "PUT"
        data: , // aqui va lo que vamos a enviar
        url: , // a donde haremos la peticion
        success: , // Callback apra cuando la peticion este exitosa
        error: , // callback para cuando hay error en la peticion
    })
} */

//Peticion para llamar nuestra base de datos
const getData = () => {
    $.ajax({
        method:"GET",
        url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/israel/.json",
        success: response => {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

getData()


//Peticion para hacer un POST

const saveData = () => {
    $.ajax({
        method:"POST",
        url:"https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/albums/.json",
        data: JSON.stringify({
            name:"Theater of Tragedy",
            band:"Gothic Metal",
            gender:"Aegis"
        }),
        success: response => {
            console.log(response)
        },    
        error: error => {
            console.log(error)
        }
    })
}

//Peticion para hacer un DELETE
const deleteData = key => {
    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/albums/${key}/.json`,
        success: response => {
            console.log(response)
        },    
        error: error => {
            console.log(error)
        }
    })
}

//Peticion para hacer un editable en especifico PATCH
// Key: -N-eOpM9TApAXMV6Jj5t
const updateData = key => {
    $.ajax({
        method:"PATCH",
        url:`https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/albums/${key}/.json`,
        data: JSON.stringify({gender:"Symphonic Metal"}),
        success: response => {
            console.log(response)
        },    
        error: error => {
            console.log(error)
        }
    })
}

//Peticion para hacer un editable PATCH
// Key: -N-eR3qPd0gIx9oyVADe
const putData = key => {
    $.ajax({
        method:"PUT",
        url:`https://ajaxclass-1ca34-91895-default-rtdb.firebaseio.com/11g/jonathan/albums/${key}/.json`,
        data: JSON.stringify({gender:"Symphonic Metal"}),
        success: response => {
            console.log(response)
        },    
        error: error => {
            console.log(error)
        }
    })
}

//ejemplo
let cardHtml = '<div class="card"><div class="card-body"><div class="div card-title">un Texto</div><div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis cupiditate modi tempora. Alias, architecto eligendi. Iure temporibus ab minima?</div></div></div>'


/*
ingresar en console

$("#content-wrapper").append('<p>Hola Mundo</p>')

agregar al final
$("#content-wrapper").append('<div class="card"><div class="card-body"><div class="div card-title">un Texto</div>    <div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis cupiditate modi tempora. Alias, architecto eligendi. Iure temporibus ab minima?</div></div></div>')

agregar al principio
$("#content-wrapper").prepend('<div class="card"><div class="card-body"><div class="div card-title">un Texto</div>    <div class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias blanditiis cupiditate modi tempora. Alias, architecto eligendi. Iure temporibus ab minima?</div></div></div>')
*/



/* Practica

-consultar el EndPoint.
-muetren los mentores que se tengan guaddados en carrds
*/

$("#content-wrapper").prepend('<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Card title</h5><h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6><p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p><a href="#" class="card-link">Card link</a><a href="#" class="card-link">Another link</a></div></div>')