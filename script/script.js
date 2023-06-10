


let boton=document.getElementById("booton");
console.log(boton);
let borrar=document.getElementById("borrar");
let nombre=document.getElementById("fname");
console.log(nombre);
let apellido=document.getElementById("lname");console.log(apellido);
let correo=document.getElementById("correo");
let cantidad=document.getElementById("cantidad");

let pagar=document.getElementById("pagar");

let divv=document.getElementById("primerDiv");
let mensaje=document.getElementById("mensaje");
let mensaje1=document.getElementById("mensaje1");
let mensaje2=document.getElementById("mensaje2");
let mensaje3=document.getElementById("mensaje3");
let opcion=document.getElementById("estudiante");
let opcion2=document.getElementById("traineer");
let opcion3=document.getElementById("junior");
let opcion4=document.getElementById("ninguno");
let selector=document.getElementById("selector");


console.log(parseInt(cantidad.value));
console.log(typeof(parseInt(cantidad.value)));


function validar1(){

if(nombre.value !=="" && apellido.value !=="" && correo.value !=="" && cantidad.value !==""){

    const pagare=document.createElement("p");

    pagare.textContent=determinarPrecio();
    pagar.appendChild(pagare);

}
else{
validar();

}


}

function determinarPrecio(){

if(selector.value ==="est"){


return parseInt(cantidad.value)*(200-(200*0.80));

}

if(selector.value ==="tra"){

    return parseInt(cantidad.value)*(200-(200*0.50));
    
    }
    if(selector.value ==="jun"){

        return parseInt(cantidad.value)*(200-(200*0.15));
        
        }

        if(selector.value ==="nin"){

            return parseInt(cantidad.value)*200;
            
            }
}
function validar(){


     if(nombre.value ===""){

nombre.classList.add('entrada');
mensaje.classList.remove('ocultar');

/*
const error1=document.createElement("p");
error1.textContent="Necesita un valor";
divv.appendChild(error1);*/

    }

if(apellido.value ===""){

        apellido.classList.add('entrada');
        mensaje1.classList.remove('ocultar');
        /*
        const error1=document.createElement("h3");
        error1.textContent="Necesita un valor";
        apellido.appendChild(error1);*/

            }


            if(correo.value ===""){

                correo.classList.add('entrada');
                mensaje2.classList.remove('ocultar');
                /*
                const error1=document.createElement("h3");
                error1.textContent="Necesita un valor";
                apellido.appendChild(error1);*/
        
                    }


                    if(cantidad.value ===""){

                        cantidad.classList.add('entrada');
                        mensaje3.classList.remove('ocultar');
                        /*
                        const error1=document.createElement("h3");
                        error1.textContent="Necesita un valor";
                        apellido.appendChild(error1);*/
                
                            }


}

function borrarTodo(){

nombre.value="";
apellido.value="";
correo.value="";
cantidad.value="";


}

    

        


boton.addEventListener("click",()=>{
validar1();
});

borrar.addEventListener('click',()=>{
borrarTodo();

});
