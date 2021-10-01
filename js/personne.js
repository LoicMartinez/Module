/* js/personnage.js */
class Personne {
    constructor(n,p) {
        this.nom = n;
        this.prenom = p;
    }
    bonjour() {
        console.log(`bonjour je m'appelle ${this.prenom} ${this.nom}` );
    }
}
export default Personne;