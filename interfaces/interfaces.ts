interface Humano {
  nome: string;
  idade?: number;
  [prop: string]: any; // muito legal
  saudar(sobrenome: string): void;
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá " + pessoa.nome);
}

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  },
};

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "Jonas", idade: 27, altura: true });
pessoa.saudar("Skywalker");

// Usando no contexto de classe
class Cliente implements Humano {
  constructor(nome: string = "") {
    this.nome = nome;
    this.ultimaCompra = new Date();
  }

  [prop: string]: any;
  nome: string;
  ultimaCompra: Date;
  idade?: number | undefined;
  saudar(sobrenome: string): void {
    console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Han";
saudarComOla(meuCliente);
meuCliente.saudar("Solo");
console.log(meuCliente.ultimaCompra);

// Interface Função

interface FuncaoCalculo {
  (a: number, b: number): number;
}

let potencia: FuncaoCalculo;

potencia = function (base: number, exp: number): number {
  // Math.pow(base, exp)
  // base ** exp
  return Array(exp)
    .fill(base)
    .reduce((t, a) => t * a);
};

console.log(potencia(3, 10));
console.log(Math.pow(3, 10));
console.log(3 ** 10);

// Herança
interface A {
  a(): void;
}

interface B {
  b(): void;
}

interface ABC extends A, B {
  c(): void;
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  b(): void {}
  a(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbstrataABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void;
}

interface Object {
  log(): void;
}

Object.prototype.log = function () {
  console.log(this.toString());
};

const x = 2;
const y = 3;
const z = 4;

x.log();
y.log();
z.log();

const cli = {
  nome: "Pedro",
  toString() {
    return this.nome;
  },
};

cli.log();
