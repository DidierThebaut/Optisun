document.addEventListener("DOMContentLoaded", () => {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    const container = document.getElementById("liste-panier");
    const totalElement = document.getElementById("total-panier");

    if (!container) return;

    if (panier.length === 0) {
        container.innerHTML = "<p>Votre panier est vide.</p>";
        if (totalElement) totalElement.textContent = "Total : 0 €";
        return;
    }

    let total = 0;
    container.innerHTML = "";

    panier.forEach((produit) => {
        const prixNum = Number(produit.prix) || 0;
        const quantiteNum = Number(produit.quantite) || 1;
        
        total += prixNum * quantiteNum;

        container.innerHTML += `
            <div class="item-panier" style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                ${produit.image ? `<img src="${produit.image}" alt="${produit.nom}" style="width: 80px; height: auto;">` : ''}
                <div>
                    <p><strong>${produit.nom || 'Produit'}</strong></p>
                    <p>${prixNum} € (x${quantiteNum})</p>
                </div>
            </div>
        `;
    });

    if (totalElement) {
        totalElement.textContent = `Total : ${total} €`;
    }
});function viderPanier() {
    localStorage.removeItem("panier");
    location.reload();
}