class Data {
  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  // Público por padrão
  dia: number;
  public mes: number;
  ano: number;
}

const aniversario = new Data(3, 11, 1991);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data(); // posso omitir os "()"
casamento.ano = 2017;
console.log(casamento);

class DataEsperta {
  constructor(
    public dia: number = 1,
    public mes: number = 1,
    public ano: number = 1970
  ) {}
}

const aniversarioEsp = new DataEsperta(3, 11, 1991);
aniversarioEsp.dia = 4;
console.log(aniversarioEsp.dia);
console.log(aniversarioEsp);

const casamentoEsp = new DataEsperta(); // posso omitir os "()"
casamentoEsp.ano = 2017;
console.log(casamentoEsp);

class Produto {
  constructor(nome: string, preco: number, desconto: number = 0) {
    if (desconto < 0 && desconto > 1) {
      throw new Error();
    } else {
      this.nome = nome;
    }

    if (preco < 0) {
      throw new Error();
    } else {
      this.preco = preco;
    }

    if (nome.length === 0) {
      throw new Error();
    } else {
      this.desconto = desconto;
    }
  }

  public nome: string;
  public preco: number;
  public desconto: number;

  public precoComDesconto(): number {
    return this.preco - this.preco * this.desconto;
  }

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto().toFixed(2)} (${
      this.desconto * 100
    }% off)`;
  }
}

const prod1 = new Produto("Caneta", 1.95);
prod1.desconto = 0.05;
console.log(prod1);
console.log(prod1.resumo());

const prod2 = new Produto("iPhone", 3500, 0.1);
console.log(prod2);
console.log(prod2.resumo());

class Carro {
  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  private velocidadeAtual: number = 0;

  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro("Ford", "Ka", 185);

Array(50)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());

Array(50)
  .fill(0)
  .forEach(() => carro1.frear());
console.log(carro1.frear());

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super("Ferrari", modelo, velocidadeMaxima);
  }

  public override acelerar(): number {
    return this.alterarVelocidade(20);
  }

  public override frear(): number {
    return this.alterarVelocidade(-15);
  }
}

const f40 = new Ferrari("F40", 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.frear());
console.log(f40.frear());

// Getters and Setters
class Pessoa {
  private _idade: number = 0;

  get idade(): number {
    return this._idade;
  }

  set idade(valor: number) {
    if (valor >= 0 && valor <= 120) this._idade = valor;
  }
}

const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1.idade);

pessoa1.idade = -10;
console.log(pessoa1.idade);

// Atributos e métodos estáticos
class Matematica {
  static PI: number = 3.1416;

  static areaCirc(raio: number): number {
    return this.PI * raio * raio;
  }
}

console.log(Matematica.areaCirc(4));

abstract class Calculo {
  protected resultado: number = 0;

  abstract executar(...numeros: number[]): void;

  getResultado(): number {
    return this.resultado;
  }
}

class Soma extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t + a);
  }
}

class Multiplicacao extends Calculo {
  executar(...numeros: number[]): void {
    this.resultado = numeros.reduce((t, a) => t * a);
  }
}

let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());

let c2 = new Multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());

class Unico {
  private static instance: Unico = new Unico();
  private constructor() {}

  static getInstance(): Unico {
    return Unico.instance;
  }

  agora() {
    return new Date();
  }
}

// const errado = new Unico()

console.log(Unico.getInstance().agora());

// Somente leitura

class Aviao {
  public readonly modelo: string;

  constructor(modelo: string, public readonly prefixo: string) {
    this.modelo = modelo;
  }
}

const turboHelice = new Aviao("Tu-114", "PT-ABC");
console.log(turboHelice);
