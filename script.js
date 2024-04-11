const myHeading = document.getElementById('title');

function changeText(event){
    event.target.innerHTML="C'est faux !";
    document.querySelector('p').innerHTML="La nouvelle version n'existe pas !"
}

myHeading.addEventListener('click',changeText)

document.getElementById('myDIV').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement
    
    // Mettez ici le code que je vous ai fourni précédemment pour récupérer les données du formulaire, les formater en JSON et les envoyer à l'URL du déclencheur HTTP
    // Récupérer les valeurs des champs du formulaire
var champ1Valeur = document.getElementById('name').value;
var champ2Valeur = document.getElementById('emailInput').value;

// Créer un objet JSON avec les données du formulaire
var donneesJSON = {
    "name": champ1Valeur,
    "mail": champ2Valeur
};

// Convertir l'objet JSON en chaîne JSON
var donneesJSONString = JSON.stringify(donneesJSON);

// Envoyer les données JSON à l'URL du déclencheur HTTP
fetch('https://prod-193.westeurope.logic.azure.com:443/workflows/ab9be6bb822f4cdbb62e6dc8f30c9f58/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=NkBiNB5afkjJSSf1HfBMeSvjdrO9yM0sbzSdKn1HcKE', {
    method: 'POST',
    body: donneesJSONString,
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    // Traiter la réponse ici
    if (response.ok) {
        // Si la réponse est OK (code de statut 200), afficher un message de réussite
        console.log("Opération réussie !");
        document.getElementById('myDIV').style.display="none"
        document.getElementById('formresponse').style.display="block"
        
    } else {
        // Sinon, gérer d'autres cas
        console.error("Erreur lors du traitement de la demande :", response.status);
    }
}).catch(error => {
    // Gérer les erreurs ici
});

});

const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    if (regexEmail.test(email)) {
        emailError.style.display = 'none'; // Masquer le message d'erreur
    } else {
        emailError.style.display = 'inline'; // Afficher le message d'erreur
    }
});