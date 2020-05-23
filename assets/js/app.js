
//variables
const listaTweets = document.getElementById('lista-tweets');



//Event Lisener

eventListeners();

function eventListeners()
{
    //cuando envias en formulario
document.querySelector('#formulario').addEventListener('submit',agregarTweet);

//borrar tweet

    listaTweets.addEventListener('click',BorrarTweet);
}

//funciones

function agregarTweet(e){
    e.preventDefault();
    //leer el valor del text Arear
    const tweet = document.getElementById('tweet').value;

    //crear boton borrar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'x';

    //crear elemento y agregar a la lista
    const li = document.createElement('li');
    li.innerText= tweet;
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);

    
}

//funcion borrar tweet

function  BorrarTweet(e)
{
    e.preventDefault();
    if(e.target.className ==='borrar-tweet' )
    {
        console.log(e.target.parentElement.remove());
    }
    
}