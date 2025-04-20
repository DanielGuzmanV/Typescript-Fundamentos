// ESM: import
import { multiplicar } from "../export/export1";
console.log('Resultado:',multiplicar(9, 7));
console.log('=====================================');

import { funcionExterna1, funcionExterna2, funcionExterna3, funcionExterna4 } from "../export/export1";

funcionExterna1(23, 51);
console.log(funcionExterna2())
console.log('=====================================');

console.log(funcionExterna3('Mauricio'));
funcionExterna4();

