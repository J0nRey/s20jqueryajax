# s20jqueryajax
JQuery con AJAX

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

/* Practica

-consultar el EndPoint.
-muetren los mentores que se tengan guaddados en carrds
*/
