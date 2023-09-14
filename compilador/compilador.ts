let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;
console.log(`Canal = ${canal}`);

nome = "Pedro";
console.log(`Nome = ${nome}`);

// let nome = "Pedro" -> Já foi criado em outro arquivo, porém ainda está no mesmo escopo

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = "abc";

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = "Bom dia!";
  } else {
    saudacao = "Tenha uma boa vida!";
  }

  return saudacao;
}
