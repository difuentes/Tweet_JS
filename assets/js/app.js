
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

    //contenidos cargados
    document.addEventListener('DOMContentLoaded',localStorageListo);
}

//funciones

function agregarTweet(e) {
    e.preventDefault();
    // leer el valor del textarea
    const tweet = document.getElementById('tweet').value;
    // crear boton de eliminar
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // Crear elemento y añadirle el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el botón de borrar al tweet
    li.appendChild(botonBorrar);
    // añade el tweet a la lista
    listaTweets.appendChild(li);
    alertify.set('notifier','position', 'bottom-left');
    alertify.success("Tweet Agregado");


    // Añadir a Local Storage
    agregarTweetLocalStorage(tweet);
}
// Elimina el Tweet del DOM
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-tweet') {
         e.target.parentElement.remove();
         borrarTweetLocalStorage(e.target.parentElement.innerText);
    } 
}

//funcion borrar tweet del dom

function  BorrarTweet(e)
{
    e.preventDefault();
    if(e.target.className ==='borrar-tweet' )
    {
        console.log(e.target.parentElement.remove());
        alertify.error('Tweet Eliminado');
        borrarTweetLocalStorage( e.target.parentElement.innerText);
        console.log();
    }
    
}


//mostrar datos del local storage en lista

function localStorageListo(){
    let tweets;

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'X';
    
        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // añade el botón de borrar al tweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listaTweets.appendChild(li);

    });
}


// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos los valoes de local storage
    if(localStorage.getItem('tweets') === null) {
         tweets = []; 
    } else {
         tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

//eliminar tweet del local
function borrarTweetLocalStorage(tweet)
{
    let tweets,tweetBorrar;
    //elimina la X del tweet
    tweetBorrar = tweet.substring(0,tweet.length -1);

    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){
       
        if(tweetBorrar === tweet)
        {   
            tweets.splice(index,1);
        }

    })

    localStorage.setItem('tweets',JSON.stringify(tweets));
}
