const myHeading = document.getElementById('title');

function changeText(event){
    event.target.innerHTML="C'est faux !";
    document.querySelector('p').innerHTML="La nouvelle version n'existe pas !"
}

myHeading.addEventListener('click',changeText)