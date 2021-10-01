/* js/modules.js */

// deux classes ou plus dans le fichier : { }
// export default, import direct

import { Homme, Femme } from './homme';
import Personne from './personne';

var fred = new Personne('Fred','Eric');
fred.bonjour();

var james = new Homme('Bond', 'James');
james.bonjour();

var lina = new Femme('Lina', 'Ange');
lina.bonjour();