// string
let nome = "João";
console.log(nome);

// nome = 28 tipagem forte, tipo inferido

// numbers
let idade = 27;
// idade = 'Ana';
idade = 27.5;
console.log(idade);

//bolean
let possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

let minhaIdade: number; // se não passar a tipagem ele entende como o tipo any
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "idade é 27";
// console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 10, 15];
// hobbies = 100
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""];
console.log(endereco);

endereco = ["Rua importante", 1260, "Rua C"];
console.log(endereco);

// enums
enum Cor {
  Cinza,
  Verde = 100,
  Azul = 2,
  Laranja,
  Amarelo,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);

// funções
function retornaMeuNome(): string {
  // return minhaIdade
  return nome;
}

console.log(retornaMeuNome());

function digaOi(): void {
  console.log("Oi");
  // return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
}

// console.log(multiplicar("Bia", 9));
console.log(multiplicar(4.7, 9));

// tipo função
let calculo: (a: number, b: number) => number;
// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: { nome: string; idade: number } = {
  nome: "João",
  idade: 27,
};
console.log(usuario);

// usuario = {};

// usuario = {
//   name: "Maria",
//   age: 31
// }

usuario = {
  nome: "Maria",
  idade: 37,
};

console.log(usuario);

// Alias
type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Joaquim", "Barney"],
  baterPonto(hora: number): string {
    if (hora <= 8) return "Ponto Normal";
    else return "Fora do horário";
  },
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

let funcionario2: Funcionario = {
  supervisores: ["Ana", "Bia"],
  baterPonto(hora: number): string {
    if (hora <= 8) return "Ponto Normal";
    else return "Fora do horário";
  },
};

console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));

// Union Types
let nota: number | string = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);

// Checando tipos
let valor = 30;

if (typeof valor === "number") {
  console.log("É um number!");
} else {
  console.log(typeof valor);
}

// never -> Função que nunca retorna nada, ou sempre retorna erro
function falha(msg: string): never {
  throw new Error(msg);
}

const produto = {
  nome: "Sabão",
  preco: 2,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome!");
    }
    if (this.preco <= 0) {
      falha("Preço Inválido!");
    }
  },
};

produto.validarProduto();

let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "9812314555",
  tel2: null,
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // tipo any
// podeSerNulo = 12;
console.log(podeSerNulo);
// podeSerNulo = "ABC";
console.log(podeSerNulo);

type ContaBancaria = {
  saldo: number;
  depositar: (deposito: number) => void;
};

type Correntista = {
  nome: string;
  contaBancaria: ContaBancaria;
  contatos: string[];
};

let contaBancaria1: ContaBancaria = {
  saldo: 3549,
  depositar(valor: number): void {
    this.saldo += valor;
  },
};

let correntista1: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria1,
  contatos: ["12345678", "87654321"],
};

correntista1.contaBancaria.depositar(3000);
console.log(correntista1);
