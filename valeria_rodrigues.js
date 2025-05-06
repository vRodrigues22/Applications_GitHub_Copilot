const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function perguntar(pergunta) {
  return new Promise(resolve => {
    readline.question(pergunta, resposta => resolve(resposta));
  });
}

// 1️⃣ Imprimindo Números Pares
function imprimePares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// 2️⃣ Soma dos Números de um Array
function somaArray(arr) {
  return arr.reduce((soma, num) => soma + num, 0);
}

// 3️⃣ Identificar Número Primo
function ePrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 4️⃣ FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) console.log("FizzBuzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
}

// 5️⃣ Contador de Vogais
function contaVogais(texto) {
  const vogais = texto.match(/[aeiouáéíóúãõâêîôûà]/gi);
  return vogais ? vogais.length : 0;
}

// 6️⃣ Tabuada de um Número
function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// 7️⃣ Inverter String
function inverteString(texto) {
  return texto.split('').reverse().join('');
}

// 8️⃣ Encontre o Maior Número
function maiorNumero(arr) {
  return Math.max(...arr);
}

// 9️⃣ Palíndromo
function ePalindromo(str) {
  const normalizada = str.toLowerCase().replace(/[\W_]/g, '');
  return normalizada === normalizada.split('').reverse().join('');
}

// 🔟 Média de Notas
function calculaMedia(notas) {
  const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;
  const status = media >= 7 ? "Aprovado" : "Reprovado";
  return `${status} - Média: ${media.toFixed(1)}`;
}

// Executar todas as funções com entrada do usuário
async function main() {
  console.log("1️⃣ Imprimindo Números Pares");
  const n1 = parseInt(await perguntar("Digite um número inteiro: "));
  imprimePares(n1);

  console.log("\n2️⃣ Soma dos Números de um Array");
  const arr2 = (await perguntar("Digite números separados por vírgula: "))
    .split(',').map(Number);
  console.log(somaArray(arr2));

  console.log("\n3️⃣ Identificar Número Primo");
  const n3 = parseInt(await perguntar("Digite um número para verificar se é primo: "));
  console.log(ePrimo(n3));

  console.log("\n4️⃣ FizzBuzz");
  fizzBuzz();

  console.log("\n5️⃣ Contador de Vogais");
  const texto5 = await perguntar("Digite uma frase: ");
  console.log(contaVogais(texto5));

  console.log("\n6️⃣ Tabuada de um Número");
  const n6 = parseInt(await perguntar("Digite um número para a tabuada: "));
  tabuada(n6);

  console.log("\n7️⃣ Inverter String");
  const texto7 = await perguntar("Digite uma palavra ou frase: ");
  console.log(inverteString(texto7));

  console.log("\n8️⃣ Encontre o Maior Número");
  const arr8 = (await perguntar("Digite números separados por vírgula: "))
    .split(',').map(Number);
  console.log(maiorNumero(arr8));

  console.log("\n9️⃣ Palíndromo");
  const texto9 = await perguntar("Digite uma frase: ");
  console.log(ePalindromo(texto9));

  console.log("\n🔟 Média de Notas");
  const arr10 = (await perguntar("Digite as notas separadas por vírgula: "))
    .split(',').map(Number);
  console.log(calculaMedia(arr10));

  readline.close();
}

main();
