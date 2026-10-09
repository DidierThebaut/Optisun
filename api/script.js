const panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(id, nom, prix, image) {
  panier.push({
    id: id,
    nom: nom,
    prix: Number(prix), // Pour s'assurer que c'est bien un nombre
    image: image,
    quantite: 1
  });

  localStorage.setItem("panier", JSON.stringify(panier));
  mettreAJourCompteur();
  alert("Produit ajouté au panier !");
}

function mettreAJourCompteur() {
  const compteur = document.getElementById("compteur");
  if (compteur) {
    compteur.textContent = panier.length;
  }
}

document.addEventListener("DOMContentLoaded", mettreAJourCompteur);