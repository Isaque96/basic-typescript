"use strict";
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
let minhaIdade; // se não passar a tipagem ele entende como o tipo any
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "idade é 27";
// console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 10, 15];
// hobbies = 100
console.log(hobbies);
// tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua importante", 1260, "Rua C"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
let carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
// funções
function retornaMeuNome() {
    // return minhaIdade
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log("Oi");
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar("Bia", 9));
console.log(multiplicar(4.7, 9));
// tipo função
let calculo;
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
let usuario = {
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
let funcionario = {
    supervisores: ["Joaquim", "Barney"],
    baterPonto(hora) {
        if (hora <= 8)
            return "Ponto Normal";
        else
            return "Fora do horário";
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
let funcionario2 = {
    supervisores: ["Ana", "Bia"],
    baterPonto(hora) {
        if (hora <= 8)
            return "Ponto Normal";
        else
            return "Fora do horário";
    },
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto(8));
console.log(funcionario2.baterPonto(9));
// Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = "10";
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log("É um number!");
}
else {
    console.log(typeof valor);
}
// never -> Função que nunca retorna nada, ou sempre retorna erro
function falha(msg) {
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
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
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
let contaBancaria1 = {
    saldo: 3549,
    depositar(valor) {
        this.saldo += valor;
    },
};
let correntista1 = {
    nome: "Ana Silva",
    contaBancaria: contaBancaria1,
    contatos: ["12345678", "87654321"],
};
correntista1.contaBancaria.depositar(3000);
console.log(correntista1);
//# sourceMappingURL=tipos.js.map