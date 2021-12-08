
//NIVEL 1
let reportAcudits = [];

//NIVEL 6 
imageArray = [
    'blob (1).svg',
    'blob (2).svg',
    'blob (3).svg',
    'blob (4).svg',
    'blob (5).svg',
]

//NIVEL1
// Ejercicio 1:
//Funcion mostrar chiste de icanhazdadjoke en consola
function mostrarChiste() {
    const url = 'https://icanhazdadjoke.com/slack';
            fetch(url)
            .then(res=> res.json())
            .then(data=> {
                console.log(data)
            })
}
// Ejercicio 2:
//Funcion mostrar chiste de icanhazdadjoke en HTML
function mostrarChisteGeneral() {
    const url = 'https://icanhazdadjoke.com/slack';
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let html = document.getElementById('chiste')//responde a boton mostrando chiste api
        html.innerHTML = `${data.attachments[0].text}`
        console.log(data)
    })
    .catch(err => console.log(err));
}
//Ejercicio 3:
//Score funcion que responde a joke, score y data a partir de chiste mostrado
function valorarChiste(score) {
    let chiste = {};
    //console.log(chiste);
    chiste.joke = document.getElementById('chiste').innerHTML;
    chiste.score = score;
    chiste.data = new Date();
    reportAcudits.push(chiste);
    console.log(reportAcudits);
}

//NIVEL 2
//Ejercicio 5:
function mostrarChisteChuck() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let html = document.getElementById('chiste')
        html.innerHTML = `${data.value}`
        console.log(data)
    })
    .catch(err => console.log(err));
}
    //Funcion random-aleatorio chiste
function chuckGeneralChiste() {
    let numeroRandom = Math.floor(Math.random()*(2-0));
    //Si la funcion random es igual a 0 mostrara api icanhazdadjoke sino, mostrarChisteChuck
    if (numeroRandom == 0) {
        mostrarChisteGeneral();
    } else {
        mostrarChisteChuck();
    }
}
// Random de imagenes blob.svg
function randomImgBlob(){
    let randomArray = Math.floor(Math.random() * imageArray.length);
    //console.log(randomArray);
    selectedImage = imageArray[randomArray]
    document.querySelector('.image_shower').src = `./images/${selectedImage}`
}
//boton mostrar chistes que responda a chisteChuck y a mostrar images blob
function mostrarChiste(){
    chuckGeneralChiste();
    randomImgBlob();
}

