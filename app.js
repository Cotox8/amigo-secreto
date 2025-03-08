// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaNombres = [];
let largoArray             = 0;
let nombreEscrito          = '';
let nombreAmigoSecreto         = '' ;



function agregarAmigo() 
{
    
    nombreEscrito = document.querySelector('#amigo').value;
    
    if (nombreEscrito != '') { 
    
            let li = document.createElement("li");
            
            if (listaNombres.includes(nombreEscrito))
            {
                alert("Ya existe");
                limpiarCaja();  
            }else{
                listaNombres.push(nombreEscrito) 

                li.textContent = nombreEscrito;

            document.getElementById("listaAmigos").appendChild(li);
            limpiarCaja();
            
            }
        }else 
        {
           alert ("Caja vacia");

        }
}

function sortearAmigo()
{
    largoArray = listaNombres.length ; 
    let numeroGenerado =  Math.floor(Math.random()*largoArray)+1;
    nombreAmigoSecreto = listaNombres [numeroGenerado-1]
    asignarTextoDocumento('#nomAmigoSecreto',`Tu amigo secreto es ${nombreAmigoSecreto}`);

}

function limpiarCaja ()
{

  let valorCaja = document.querySelector('#amigo');
  valorCaja.value = '';
}

function asignarTextoDocumento (elemento, texto)
{
       
    let elementoHTML = document.querySelector(elemento);
       
    elementoHTML.innerHTML =texto;

}