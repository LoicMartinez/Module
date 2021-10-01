/* js/homme.js */
//import de la classe mère
import Personne from './personne.js';
class Homme extends Personne {
    constructor(n,p) {
        super(n, p);
        this.sexe = 'H';
    }
}
export { Homme };

class Femme extends Personne {
    constructor(n,p) {
        super(n, p);
        this.sexe = 'F';
    }
}
export { Femme };