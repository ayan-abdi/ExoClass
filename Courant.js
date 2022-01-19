import { Personne} from "./Personne.js";

export  class Courant {
    #credit;
    #solde; 
    #titulaire
    constructor(numero, solde, credit, titulaire){
        if(solde < -credit || isNaN (solde)) throw new RangeError('le solde doit toujours etre positive')
        
        this.numero = numero 
        this.#solde = solde
        this.Credit = credit
        this.Titulaire = titulaire
    }

    
    get Solde(){
        return this.#solde; 
        
    }
    set Credit(value){
        if(isNaN(value)) throw new TypeError(`La valeur : ${value}; n\est pas de type number`);
        if(value < 0) throw new RangeError('ligne de credit doit toujours etre positive')
        this.#credit = value    
    }
    get Credit(){
        return this.#credit
    }
    
    set Titulaire(value){
        if(value.constructor !== Personne.prototype.constructor) 
        throw new TypeError('les informations saisi ne correspondent pas aux données du titulaire ')
        this.#titulaire = value;
        
    }
    get Titulaire(){
        return this.#titulaire
    }
    depot(montant){
        if(montant <= 0) throw new RangeError('le montant doit etre positif.')
        this.#solde += montant;
        // dans la methode depot on verifie d'abord si le montant est négatif ce qui 
        // conduit le système a thrower l'erreur qu'on peut alors soumettre un message d'erreur
        // si par contre la condition n'est pas resppecter dans ce cas la seconde condition s'executer automatiquement
        // "ctrl kf pout indenter le code"  
    }
    retrait(montant){
        if(montant <= 0) throw new RangeError('le montant doit etre positif.')
        this.#solde += montant;
        if(montant > this.#solde + this.credit) throw new RangeError('le montant doit etre superieur à votre solde.')
        this.#solde + this.credit    
    }
    

}   



// IL FAUT METTRE EN PRIVE : ligne de credit, 
//  lecture : get, ecriture : set
// cntrl juste en haut de contrl + l
// 