function logarClasse(construtor: Function) {
  console.log(construtor);
}

function decoratorVazio(_: Function) {}

function logarClasseSe(valor: boolean) {
  return valor ? logarClasse : decoratorVazio;
}

function decorator(obj: { a: string; b?: number }) {
  return function (_: Function): void {
    console.log(obj.a + " " + obj.b);
  };
}

type Construtor = { new (...args: any[]): {} };

function logarObjeto(construtor: Construtor) {
  console.log("Carrgado!!!");
  return class extends construtor {
    constructor(...args: any[]) {
      console.log("Antes...");
      super(...args);
      console.log("Depois...");
    }
  };
}

// new Eletrodomestico();
// new Eletrodomestico();
// new Eletrodomestico();

interface Eletrodomestico {
  imprimir?(): void;
}

// @logarClasse
// @decorator({ a: "Teste", b: 123 })
// @logarClasseSe(true)
// @logarObjeto
// @imprimivel
class Eletrodomestico {
  constructor() {
    console.log("novo...");
  }
}

function imprimivel(construtor: Function) {
  construtor.prototype.imprimir = function () {
    console.log(this);
  };
}

// Cast
// (<any>new Eletrodomestico()).imprimir();
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();

// Desafio Decorator perfilAdmin
const usuarioLogado = {
  nome: "Guilherme Filho",
  email: "guigui@gmail.com",
  admin: false,
};

// @perfilAdmin
class MudancaAdministrativa {
  critico() {
    console.log("Algo crítico foi alterado!");
  }
}

new MudancaAdministrativa().critico();

function perfilAdmin<T extends Construtor>(construtor: T) {
  return class extends construtor {
    constructor(...args: any[]) {
      super(...args);
      if (!usuarioLogado || !usuarioLogado.admin)
        throw new Error("Usuário não tem permissão!");
    }
  };
}

class ContaCorrente {
  @naoNegativo
  private saldo: number;

  constructor(saldo: number) {
    this.saldo = saldo;
  }

  @congelar
  sacar(@paramInfo valor: number): boolean {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    } else {
      return false;
    }
  }

  @congelar
  getSaldo(): number {
    return this.saldo;
  }
}

const cc = new ContaCorrente(10248.57);
cc.sacar(5000);
console.log(cc.getSaldo());

// cc.getSaldo = function () {
//   return this["saldo"] + 7000;
// };

console.log(cc.getSaldo());

function congelar(
  alvo: any,
  nomeMetodo: string,
  descritor: PropertyDescriptor
) {
  console.log(alvo);
  console.log(nomeMetodo);
  descritor.writable = false;
}

function naoNegativo(alvo: any, nomeDaPropriedade: string) {
  delete alvo[nomeDaPropriedade];
  let newPrivateName = "_" + nomeDaPropriedade;
  Object.defineProperty(alvo, nomeDaPropriedade, {
    get: function (): any {
      return alvo[newPrivateName];
    },
    set: function (valor: any): void {
      if (valor < 0) {
        throw new Error("Saldo Inválido");
      } else {
        alvo[newPrivateName] = valor;
      }
    },
  });
}

function paramInfo(alvo: any, nomeMetodo: string, indiceParam: number) {
  console.log(`Alvo: ${alvo}`);
  console.log(`Método: ${nomeMetodo}`);
  console.log(`Índice Param: ${indiceParam}`);
}
