let nombre;
let cantidad = 0;
let salario = 0;
let extra = 0;

let formulario = document.getElementById(`form`)

formulario.addEventListener(`submit`,(e)=>{
    e.preventDefault()
    leerdatos()
})

function leerdatos(){
    nombre = document.getElementById(`nombre`).value 
    cantidad = Number(document.getElementById(`cantidad`).value)
    validardata(nombre,cantidad)
}

function validardata(nombre,cantidad) {
    if( isNaN(nombre)== false || isNaN(cantidad)==true ||
    nombre.length==0 || cantidad<0){
        swal("erros de informacion","oooopsss...","error");
    
}  
    else{
    calcular(cantidad) 

    }
}


function calcular(cantidad){

    if(cantidad>=0 && cantidad<=40){
        salario=cantidad * 8000;
        document.getElementById(`salario`).value = salario;
        document.getElementById(`salarioextra`).value = 0;
        document.getElementById(`total`).value = salario;
    }


else{
    extra= cantidad - 40;
    salario= (extra*12000) + (40*8000);
    document.getElementById(`salario`).value=40 *8000;
    document.getElementById(`salarioextra`).value=extra*12000;
    document.getElementById(`total`).value=salario;
    }
}