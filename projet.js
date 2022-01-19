// Dans cette partie du js on commence à faire une espece de 
// carte de produit qu'on l'utilisera comme template sur 
// les autres produits.
// comme la valeur de notre constante est une div qui s'utilise qu'en html
// les magic quotes rendent possible leurs utilisations.
const productCardTemplate = ` 
<div class= "card">
       <img>
       <div>
           <p class="name"></p>
           <div> 
               <span class="price"></span>
               <span class="description"></span>
            </div>
        </div>
    </div>
`;
// 2ième étape: 
// il s'agit de trouver 
// le tableau d'element qui me permet 
// choisir sur ma data(dans la page data.js)
// on aurait besoin d'un for pour parcourir les element de notre array

for (const prod of data.products) {
let card = $(productCardTemplate);
card.find('.name').text(prod.name);
card.find('.price').text(prod.price + '€');
card.find('.description').text(prod.description);
    
}