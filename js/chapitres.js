let mesDatas = [
    {
        titre : "Bienvenue !", 
        paragraphe : "Bienvenue sur mon site ! Plein de lorem ipsum..."
    },
    {
        titre : "Chapitre 1 : un chapitre pour débuter", 
        paragraphe : "Paragraphe chapitre 1"
    },
    {
        titre : "Chapitre 2 : un autre chapitre", 
        paragraphe : "Paragraphe chapitre 2"
    },
    {
        titre : "Chapitre 3 : encore un chapitre", 
        paragraphe : "Paragraphe chapitre 3"
    }
];

function mesChapitres() {
    for (let data in mesDatas){

        var maDiv = document.createElement("div");
        var monTitre = document.createElement("h1");
        var monParagraphe = document.createElement("p");

        maDiv.appendChild(monTitre);
        maDiv.appendChild(monParagraphe);
        document.body.appendChild(maDiv);

        monTitre.innerText = mesDatas[data].titre;
        monParagraphe.innerText = mesDatas[data].paragraphe;
    }
}

mesChapitres();