// let & const
let seraQuePode = "?"; // Não sofre hoisting
console.log(seraQuePode);
// var seraQuePode = "?"; // hoisting - as variáveis são içadas para cima

let estaFrio = true;
if (estaFrio) {
  let acao = "Colocar Casaco"; // Não permite ser acessado, pois tem escopo de bloco
  // var acao = "Colocar casaco" // Permite ser acessado devido ao escopo global
  console.log(acao);
}

const cpf: string = "123.456.000-99";
// cpf = "789.101.132-78"
console.log(cpf);

var segredo = "externo";
function revelar() {
  var segredo = "interno"; // var Tem escopo de funcao
  console.log(segredo);
}

revelar();
console.log(segredo);

{
  {
    const def = "def";
    console.log(def);
  }
}

for (let i = 0; i < 0; i++) {
  console.log(i);
}

// console.log(i)

// Arrow Function

const somar = function (n1: number, n2: number): number {
  return n1 + n2;
};
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log("Olá!");
saudacao();

const falarCom = (pessoa: string) => console.log("Olá " + pessoa);
falarCom("João");

// this

/*function normalComThis() {
  console.log(this);
}

const normalComThisEspecial = normalComThis.bind({ nome: "Ana" });
normalComThisEspecial();

// this??
console.log(this);
const arrowComThis = () => console.log(this);
arrowComThis();

const arrowComThisEspecial = arrowComThis.bind({ nome: "Ana" });*/

// Parâmetros padrão
function contagemRegressiva(
  inicio: number = 3,
  fim: number = inicio - 5
): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
  console.log("Fim!");
}

contagemRegressiva();
contagemRegressiva(3);

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max(...numbers));

const turmaA: string[] = ["João", "Maria", "Fernanda"];
const turmaB: string[] = ["Fernando", ...turmaA, "Miguel", "Lorena"];
console.log(turmaB);

function retornarArray(...args: number[]): number[] {
  return args;
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray(...numbers));

// Rest & Spread(Tupla)
const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// Destructuring (array)
const caracteristicas = ["Motor Zetec 1.8", 2020];
// const motor = caracteristicas[0];
// const ano = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);

const item = {
  nome: "SSD 480Gb",
  preco: 200,
  caracteristicas: {
    w: "Importado",
  },
};

const nomeItem = item.nome;
const precoItem = item.preco;
const wCaracteristicaItem = item.caracteristicas.w;
console.log(nomeItem);
console.log(precoItem);
console.log(wCaracteristicaItem);

const {
  nome: n,
  preco: p,
  caracteristicas: { w },
} = item;
console.log(n);
console.log(p);
console.log(w);

const usuarioId = "SuporteCod3r";
const notificacoes: string = "19";
// const boasVindas = "Boas Vindas " + usuarioId + "Notificações: " + notificacoes;
const boasVindas = `Boas Vindas ${usuarioId},
Notificações: ${parseInt(notificacoes) > 9 ? "+9" : notificacoes}`;
console.log(boasVindas);
console.log(`Motor: ${caracteristicas[0]}`);

// Callback
/*function esperar3s(callback: (dado: string) => void) {
  setTimeout(() => {
    callback("3s depois");
  }, 3000);
}

esperar3s(function (resultado: string) {
  console.log(resultado);
});

function esperar3sPromise() {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      resolve("3s depois promise...");
    }, 3000);
  });
}

esperar3sPromise().then((dado) => console.log(dado));

fetch("https://swapi.dev/api/people/1")
  .then((res) => res.json())
  .then((personagem) => personagem.films)
  .then((films) => fetch(films[0]))
  .then((resFilms) => resFilms.json())
  .then((filme) => console.log(filme.title))
  .catch((err) => console.log("Catch:\n" + err));*/
