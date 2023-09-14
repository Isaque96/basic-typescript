// import { areaRetangulo } from "./retangulo";
// import { areaCircunferencia } from "./circunferencia";
import ret from "./retangulo";
import { areaCircunferencia as circ } from "./circunferencia";

console.log("Módulo carregado!");
console.log(ret(7, 8));
console.log(circ(2));

const { digaOi } = require("./novo");
console.log(digaOi("Ana"));
