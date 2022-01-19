import { Personne } from "./Personne.js"; 
import { Courant } from "./Courant.js";
// Assessor Get return toujours un affichage de qlq chose 
//Mutateur Set a plutot un seul paramètre exple 
// this.#serialNumber  = Date.now(), set SerialNumber(value)
// dans auto.serialNumber = 'toto', alors la value devient toto

let user = new Personne('Ayan', 'Abdi', '1989/04/08'); 
let accounter = new Courant('BE05', 500, 200, user); 
console.log(accounter);

//1 les class qui s'exportent exple persone
// 2 class qui importent et s'exportent exple compte Courant
// 3 les elements qui importent simplement comme le main par exple

//  le # n'est utilisable que dans le definition de ma class

let myDictionnary = new Map(); 
// le map sert a stocker differents elements, qui peuvent également garder les memes valeurs
console.log(myDictionnary);